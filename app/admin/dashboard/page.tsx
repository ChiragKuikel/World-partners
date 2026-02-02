"use client"

import React from "react"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { LogOut } from "lucide-react"
import { Mail, Phone, Download} from 'lucide-react'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("jobs")

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    }
  }, [status, router])

  if (status === "loading") {
    return <p className="text-center py-20">Loading...</p>
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-primary text-accent shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-accent/80">{session.user?.email}</span>
            <button
              onClick={() => signOut({ redirect: true, callbackUrl: "/admin/login" })}
              className="flex items-center gap-2 px-4 py-2 bg-accent text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          {[
            { id: "jobs", label: "Jobs" },
            { id: "blog", label: "Blog" },
            { id: "applications", label: "Applications" },
            { id: "contacts", label: "Messages" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-semibold border-b-2 transition-colors ${activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-text-light hover:text-text"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-background rounded-lg border border-border p-6">
          {activeTab === "jobs" && <JobsManagement token={session.user?.token} />}
          {activeTab === "blog" && <BlogManagement token={session.user?.token} />}
          {activeTab === "applications" && <ApplicationsManagement token={session.user?.token} />}
          {activeTab === "contacts" && <ContactsManagement token={session.user?.token} />}
        </div>
      </main>
    </div>
  )
}

// Jobs Management Component
function JobsManagement({ token }: { token: string }) {
  const [jobs, setJobs] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    title: "", description: "", benefits: "",
    place: "",
    contractType: "",
    employmentPeriod: "",
    trialPeriod: "",
    salary: "",
    workingDays: "",
    workTime: "",
    breakTime: "",
    holidays: "",
    gender: "",
    requirements: "",
    selectionMethod: "",
    applicationMethod: "",
    notification: "",
    image: null as File | null
  })

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await fetch(`/api/jobs`)
      if (response.ok) {
        setJobs(await response.json())
      }
    } finally {
      setLoading(false)
    }
  }

  const handleAddJob = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      let imageBase64 = ""
      if (formData.image) {
        const reader = new FileReader()
        imageBase64 = await new Promise((resolve) => {
          reader.onloadend = () => {
            resolve((reader.result as string).split(",")[1])
          }
          if (formData.image) {
            reader.readAsDataURL(formData.image);
          }
        })
      }

      const response = await fetch(`/api/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          image: imageBase64,
          benefits: formData.benefits,
          place: formData.place,
          contractType: formData.contractType,
          employmentPeriod: formData.employmentPeriod,
          trialPeriod: formData.trialPeriod,
          salary: formData.salary,
          workingDays: formData.workingDays,
          workTime: formData.workTime,
          breakTime: formData.breakTime,
          holidays: formData.holidays,
          gender: formData.gender,
          requirements: formData.requirements,
          selectionMethod: formData.selectionMethod,
          applicationMethod: formData.applicationMethod,
          Notification: formData.notification
        }),
      })

      if (response.ok) {

        setShowForm(false)
        fetchJobs()
      }
    } catch (error) {
      console.error("Error adding job:", error)
    }
  }

  const handleDeleteJob = async (jobId: number) => {
    if (!confirm("Are you sure you want to delete this job?")) return

    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })

      if (response.ok) {
        fetchJobs()
      }
    } catch (error) {
      console.error("Error deleting job:", error)
    }
  }

  if (loading) return <p>Loading jobs...</p>

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text">Manage Jobs</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary text-accent rounded-lg hover:bg-primary-dark transition-colors"
        >
          {showForm ? "Cancel" : "Add Job"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleAddJob}
          className="mb-6 p-4 bg-secondary rounded-lg border border-border space-y-4"
        >
          {/* Job Title */}
          <div className="space-y-2">
            <label htmlFor="job-title" className="block text-sm font-medium text-foreground">
              Job Title
            </label>
            <input
              id="job-title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Job Description */}
          <div className="space-y-2">
            <label htmlFor="job-description" className="block text-sm font-medium text-foreground">
              Job Description
            </label>
            <textarea
              id="job-description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Our Benefits */}
          <div className="space-y-2">
            <label htmlFor="benefits" className="block text-sm font-medium text-foreground">
              Our Benefits
            </label>
            <textarea
              id="benefits"
              value={formData.benefits}
              onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label htmlFor="location" className="block text-sm font-medium text-foreground">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={formData.place}
              onChange={(e) => setFormData({ ...formData, place: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Employment Contract */}
          <div className="space-y-2">
            <label htmlFor="contract-type" className="block text-sm font-medium text-foreground">
              Employment Contract
            </label>
            <select
              id="contract-type"
              value={formData.contractType}
              onChange={(e) => setFormData({ ...formData, contractType: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            >
              <option value="">Select contract type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
            </select>
          </div>

          {/* Employment Period */}
          <div className="space-y-2">
            <label htmlFor="employment-period" className="block text-sm font-medium text-foreground">
              Employment Period
            </label>
            <input
              id="employment-period"
              type="text"
              value={formData.employmentPeriod}
              onChange={(e) =>
                setFormData({ ...formData, employmentPeriod: e.target.value })
              }
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Trial Period */}
          <div className="space-y-2">
            <label htmlFor="trial-period" className="block text-sm font-medium text-foreground">
              Trial Period
            </label>
            <input
              id="trial-period"
              type="text"
              value={formData.trialPeriod}
              onChange={(e) =>
                setFormData({ ...formData, trialPeriod: e.target.value })
              }
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Salary */}
          <div className="space-y-2">
            <label htmlFor="salary" className="block text-sm font-medium text-foreground">
              Salary
            </label>
            <input
              id="salary"
              type="text"
              value={formData.salary}
              onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Working Days */}
          <div className="space-y-2">
            <label htmlFor="working-days" className="block text-sm font-medium text-foreground">
              Working Days
            </label>
            <input
              id="working-days"
              type="text"
              value={formData.workingDays}
              onChange={(e) =>
                setFormData({ ...formData, workingDays: e.target.value })
              }
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Work Time */}
          <div className="space-y-2">
            <label htmlFor="work-time" className="block text-sm font-medium text-foreground">
              Work Time
            </label>
            <input
              id="work-time"
              type="text"
              value={formData.workTime}
              onChange={(e) => setFormData({ ...formData, workTime: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Break Time */}
          <div className="space-y-2">
            <label htmlFor="break-time" className="block text-sm font-medium text-foreground">
              Break Time
            </label>
            <input
              id="break-time"
              type="text"
              value={formData.breakTime}
              onChange={(e) => setFormData({ ...formData, breakTime: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Holidays */}
          <div className="space-y-2">
            <label htmlFor="holidays" className="block text-sm font-medium text-foreground">
              Holidays
            </label>
            <input
              id="holidays"
              type="text"
              value={formData.holidays}
              onChange={(e) => setFormData({ ...formData, holidays: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label htmlFor="gender" className="block text-sm font-medium text-foreground">
              Gender Preference
            </label>
            <select
              id="gender"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            >
              <option value="">Select gender preference</option>
              <option value="any">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Requirements */}
          <div className="space-y-2">
            <label htmlFor="requirements" className="block text-sm font-medium text-foreground">
              Requirements
            </label>
            <textarea
              id="requirements"
              value={formData.requirements}
              onChange={(e) =>
                setFormData({ ...formData, requirements: e.target.value })
              }
              rows={3}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Selection Method */}
          <div className="space-y-2">
            <label htmlFor="selection-method" className="block text-sm font-medium text-foreground">
              Selection Method
            </label>
            <input
              id="selection-method"
              type="text"
              value={formData.selectionMethod}
              onChange={(e) =>
                setFormData({ ...formData, selectionMethod: e.target.value })
              }
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Application Method */}
          <div className="space-y-2">
            <label htmlFor="application-method" className="block text-sm font-medium text-foreground">
              Application Method
            </label>
            <input
              id="application-method"
              type="text"
              value={formData.applicationMethod}
              onChange={(e) =>
                setFormData({ ...formData, applicationMethod: e.target.value })
              }
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Notification of Results */}
          <div className="space-y-2">
            <label htmlFor="notification" className="block text-sm font-medium text-foreground">
              Notification of Results
            </label>
            <input
              id="notification"
              type="text"
              value={formData.notification}
              onChange={(e) =>
                setFormData({ ...formData, notification: e.target.value })
              }
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background"
            />
          </div>

          {/* Job Image */}
          <div className="space-y-2">
            <label htmlFor="job-image" className="block text-sm font-medium text-foreground">
              Job Image
            </label>
            <input
              id="job-image"
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files?.[0] || null })
              }
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background text-sm"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-primary text-accent rounded-lg hover:bg-primary-dark transition-colors font-semibold mt-6"
          >
            Create Job
          </button>
        </form>
      )}

      <div className="space-y-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex justify-between items-center p-4 bg-secondary rounded-lg border border-border"
          >
            <div>
              <h3 className="font-semibold text-text">{job.title}</h3>
              <p className="text-sm text-text-light">{job.description.substring(0, 50)}...</p>
            </div>
            <button
              onClick={() => handleDeleteJob(job.id)}
              className="px-3 py-1 text-red-600 hover:bg-red-100 rounded transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Blog Management Component
function BlogManagement({ token }: { token: string }) {
  const [posts, setPosts] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({ title: "", content: "", image: null as File | null })

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(`/api/blog`)
      if (response.ok) {
        setPosts(await response.json())
      }
    } finally {
      setLoading(false)
    }
  }

  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      let imageBase64 = ""
      if (formData.image) {
        const reader = new FileReader()
        imageBase64 = await new Promise((resolve) => {
          reader.onloadend = () => {
            resolve((reader.result as string).split(",")[1])
          }
          if (formData.image) {
            reader.readAsDataURL(formData.image);
          }
        })
      }

      const response = await fetch(`/api/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: formData.title,
          content: formData.content,
          imageFile: imageBase64,
        }),
      })

      if (response.ok) {
        setFormData({ title: "", content: "", image: null })
        setShowForm(false)
        fetchBlogPosts()
      }
    } catch (error) {
      console.error("Error adding blog post:", error)
    }
  }

  const handleDeleteBlog = async (postId: number) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return

    try {
      const response = await fetch(`/api/blog/${postId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })

      if (response.ok) {
        fetchBlogPosts()
      }
    } catch (error) {
      console.error("Error deleting blog post:", error)
    }
  }

  if (loading) return <p>Loading blog posts...</p>

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text">Manage Blog Posts</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary text-accent rounded-lg hover:bg-primary-dark transition-colors"
        >
          {showForm ? "Cancel" : "Add Post"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAddBlog} className="mb-6 p-4 bg-secondary rounded-lg border border-border space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
          />
          <textarea
            placeholder="Blog Content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            required
            rows={6}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
            className="w-full text-sm"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-accent rounded-lg hover:bg-primary-dark transition-colors font-semibold"
          >
            Create Blog Post
          </button>
        </form>
      )}

      <div className="space-y-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex justify-between items-center p-4 bg-secondary rounded-lg border border-border"
          >
            <div>
              <h3 className="font-semibold text-text">{post.title}</h3>
              <p className="text-sm text-text-light">{post.content.substring(0, 50)}...</p>
            </div>
            <button
              onClick={() => handleDeleteBlog(post.id)}
              className="px-3 py-1 text-red-600 hover:bg-red-100 rounded transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Applications Management Component
function ApplicationsManagement({ token }: { token: string }) {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingStatus, setEditingStatus] = useState<string | null>(null);
  const [newStatus, setNewStatus] = useState('');
  const [selectedApp, setSelectedApp] = useState<any>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch(
        `/api/applications`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.ok) {
        const data = await response.json();
        
        setApplications(data);
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (applicationId: string) => {
    try {
      const response = await fetch(
        `/api/applications/${applicationId}/status`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (response.ok) {
        setApplications(applications.map(app =>
          app.id === applicationId ? { ...app, status: newStatus } : app
        ));
        setEditingStatus(null);
        setNewStatus('');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteApplication = async (applicationId: string) => {
    if (!confirm('Are you sure you want to delete this application?')) return;

    try {
      const response = await fetch(
        `/api/applications/${applicationId}`,
        {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.ok) {
        setApplications(applications.filter(app => app.id !== applicationId));
      }
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  const downloadResume = async (application: any) => {
    try {
      // First, get a signed URL for the resume
      const response = await fetch(
        `/api/applications/${application.id}/resume`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.ok) {
        const { url } = await response.json();

        // Open in new tab or trigger download
        window.open(url, '_blank');

        // OR trigger download:
        // const link = document.createElement('a');
        // link.href = url;
        // link.download = `${application.full_name}_resume.pdf`;
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const viewCoverLetter = (app: any) => {
    setSelectedApp(app);
  };

  const closeModal = () => {
    setSelectedApp(null);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      <span className="ml-2">Loading applications...</span>
    </div>
  );
  function DetailLine({ label, value }: { label: string; value: string | null }) {
  if (!value || value === "Not provided") return null;
  return (
    <div className="flex justify-between">
      <span className="font-medium text-gray-600">{label}:</span>
      <span className="text-gray-800">{value}</span>
    </div>
  );
}
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-text mb-6">Job Applications</h2>

      {applications.length === 0 ? (
        <div className="text-center py-12 border rounded-lg border-border">
          <p className="text-gray-500">No applications found</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="border-b border-border">
                <th className="text-left p-4 font-semibold text-gray-700">Job</th>
                <th className="text-left p-4 font-semibold text-gray-700">Applicant</th>
                <th className="text-left p-4 font-semibold text-gray-700">Contact</th>
                <th className="text-left p-4 font-semibold text-gray-700">Cover letter</th>
                <th className="text-left p-4 font-semibold text-gray-700">Status</th>
                <th className="text-left p-4 font-semibold text-gray-700">Applied</th>
                <th className="text-left p-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <React.Fragment key={app.id}>
                <tr  className="border-b border-border hover:bg-gray-50">
                  {/* Job Column with Image */}
                  <td className="p-4">
                    <div>
                      <p className="font-medium text-gray-900">{app.job_title}</p>
                    </div>
                  </td>

                  {/* Applicant Info */}
                  <td className="p-4">
                    <div>
                      <p className="font-medium text-gray-900">{app.first_name} {app.last_name}</p>
                      <button
                        onClick={() => {
                          // Toggle: if already expanded, collapse; otherwise expand this row
                          setExpandedId(expandedId === app.id ? null : app.id);
                        }}
                        className="text-xs text-blue-600 hover:text-blue-800 mt-1 flex items-center"
                      >
                        {/* Dynamic icon/text */}
                        {expandedId === app.id ? (
                          <>
                            <span className="mr-1">▲</span> Less details
                          </>
                        ) : (
                          <>
                            <span className="mr-1">▼</span> More details
                          </>
                        )}
                      </button>

                    </div>
                  </td>

                  {/* Contact Info */}
                  <td className="p-4">
                    <div className="space-y-1">
                      <p className="text-gray-700">{app.email}</p>
                      <p className="text-gray-600">{app.phone || "-"}</p>

                    </div>
                  </td>

                  <td>{app.cover_letter && (
                    <button
                      onClick={() => viewCoverLetter(app)}
                      className="text-xs text-blue-600 hover:text-blue-800 mt-1"
                    >
                      View cover letter
                    </button>
                  )}</td>

                  {/* Status Column with Edit */}
                  <td className="p-4">
                    {editingStatus === app.id ? (
                      <div className="flex items-center space-x-2">
                        <select
                          value={newStatus}
                          onChange={(e) => setNewStatus(e.target.value)}
                          className="text-sm border rounded px-2 py-1"
                        >
                          <option value="pending">Pending</option>
                          <option value="reviewing">Reviewing</option>
                          <option value="shortlisted">Shortlisted</option>
                          <option value="accepted">Accepted</option>
                          <option value="rejected">Rejected</option>
                        </select>
                        <button
                          onClick={() => updateStatus(app.id)}
                          className="px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => {
                            setEditingStatus(null);
                            setNewStatus('');
                          }}
                          className="px-2 py-1 bg-gray-300 text-gray-700 rounded text-xs hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${app.application_status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : app.application_status === "reviewed"
                              ? "bg-blue-100 text-blue-800"
                              : app.application_status === "accepted"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                        >
                          {app.application_status?.charAt(0).toUpperCase() + app.application_status?.slice(1)}
                        </span>
                        <button
                          onClick={() => {
                            setEditingStatus(app.id);
                            setNewStatus(app.application_status);
                          }}
                          className="text-gray-500 hover:text-gray-700"
                          title="Edit status"
                        >
                          ✏️
                        </button>
                      </div>
                    )}
                  </td>

                  {/* Date Column */}
                  <td className="p-4 text-gray-600">
                    {new Date(app.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>

                  {/* Actions Column */}
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      {/* Download Resume Button */}
                      {app.resume_key && (
                        <button
                          onClick={() => downloadResume(app)}
                          className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 flex items-center"
                          title="Download Resume"
                        >
                          <span className="mr-1">📄</span> Resume
                        </button>
                      )}

                      {/* Delete Button */}
                      <button
                        onClick={() => deleteApplication(app.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700"
                        title="Delete Application"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedId === app.id &&<tr>
                  <td colSpan={8} className="p-6"> {/* colSpan should match total columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Personal Details Card */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <span className="mr-2">👤</span> Personal Details
              </h4>
              <div className="space-y-2 text-sm">
                <DetailLine label="Gender" value={app.gender} />
                <DetailLine label="Date of Birth" value={
                  app.date_of_birth ? 
                  new Date(app.date_of_birth).toLocaleDateString() : 
                  "Not provided"
                } />
                <DetailLine label="Country" value={app.country} />
                <DetailLine label="Email" value={app.email} />
                <DetailLine label="Phone" value={app.phone} />
              </div>
            </div>
            
            {/* Japan Details Card */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <span className="mr-2">🇯🇵</span> Japan Details
              </h4>
              <div className="space-y-2 text-sm">
                <DetailLine label="Residence Status" value={app.residence_status} />
                <DetailLine label="Japanese Level" value={app.japanese_level} />
                <DetailLine label="Nearest Station" value={app.nearest_station} />
                {app.facebook_url && (
                  <div className="pt-2">
                    <p className="font-medium text-gray-600">Facebook:</p>
                    <a 
                      href={app.facebook_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-xs"
                    >
                      View Profile
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            {/* Availability Card */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <span className="mr-2">📅</span> Availability
              </h4>
              <div className="space-y-2 text-sm">
                <DetailLine label="Working Days" value={app.working_days} />
                <DetailLine label="Days per Week" value={app.days_per_week} />
              </div>
              
              
              
            </div>
            
          </div>
        </td>
                </tr>}
                </React.Fragment>
              )
              
              )}
              
            </tbody>
          </table>
        </div>
      )}

      {/* Cover Letter Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                Cover Letter from {selectedApp.full_name}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line">{selectedApp.cover_letter}</p>
              </div>
            </div>
            <div className="flex justify-end p-6 border-t bg-gray-50">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Contacts Management Component
function ContactsManagement({ token }: { token: string }) {
  const [contacts, setContacts] = useState<any[]>([])
  const [filteredContacts, setFilteredContacts] = useState<any[]>([])
  const [activeFilter, setActiveFilter] = useState<'all' | 'individual' | 'company'>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchContacts()
  }, [])

  useEffect(() => {
    // Filter contacts whenever activeFilter or contacts change
    if (activeFilter === 'all') {
      setFilteredContacts(contacts)
    } else if (activeFilter === 'individual') {
      setFilteredContacts(contacts.filter(contact => 
        contact.contact_type?.toLowerCase() === 'individual'
      ))
    } else if (activeFilter === 'company') {
      setFilteredContacts(contacts.filter(contact => 
        contact.contact_type?.toLowerCase() === 'company'
      ))
    }
  }, [contacts, activeFilter])

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contacts', {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (response.ok) {
        const data = await response.json()
        setContacts(data)
        setFilteredContacts(data) // Initialize with all contacts
      }
    } finally {
      setLoading(false)
    }
  }

  const formatLabel = (text: string) => {
    return text.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

 const downloadResume = async (application: any) => {
    try {
      // First, get a signed URL for the resume
      const response = await fetch(
        `/api/contacts/${application.id}/resume`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.ok) {
        const { url } = await response.json();

        // Open in new tab or trigger download
        window.open(url, '_blank');

        // OR trigger download:
        // const link = document.createElement('a');
        // link.href = url;
        // link.download = `${application.full_name}_resume.pdf`;
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const getContactTypeCount = (type: 'individual' | 'company') => {
    return contacts.filter(contact => 
      contact.contact_type?.toLowerCase() === type
    ).length
  }

  const getAllCount = () => {
    return contacts.length
  }

  if (loading) return <p>Loading messages...</p>

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-bold text-text mb-4 sm:mb-0">Contact Messages</h2>
        
        {/* Navigation/Filters */}
        <div className="flex space-x-1 bg-secondary rounded-lg p-1 border border-border">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeFilter === 'all' 
                ? 'bg-primary text-white' 
                : 'text-text-light hover:text-text hover:bg-background'
            }`}
          >
            All ({getAllCount()})
          </button>
          <button
            onClick={() => setActiveFilter('individual')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeFilter === 'individual' 
                ? 'bg-primary text-white' 
                : 'text-text-light hover:text-text hover:bg-background'
            }`}
          >
            Individuals ({getContactTypeCount('individual')})
          </button>
          <button
            onClick={() => setActiveFilter('company')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeFilter === 'company' 
                ? 'bg-primary text-white' 
                : 'text-text-light hover:text-text hover:bg-background'
            }`}
          >
            Companies ({getContactTypeCount('company')})
          </button>
        </div>
      </div>

      {/* Active filter indicator */}
      {activeFilter !== 'all' && (
        <div className="mb-6 p-3 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-sm text-text">
            Showing {activeFilter} messages: <span className="font-semibold">{filteredContacts.length}</span> found
          </p>
        </div>
      )}

      {filteredContacts.length === 0 ? (
        <div className="text-center py-12 bg-secondary rounded-lg border border-border">
          <p className="text-text-light text-lg mb-2">
            {contacts.length === 0 ? 'No contact messages found.' : `No ${activeFilter} messages found.`}
          </p>
          {contacts.length > 0 && activeFilter !== 'all' && (
            <button
              onClick={() => setActiveFilter('all')}
              className="text-primary hover:underline mt-2"
            >
              View all messages
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {filteredContacts.map((contact) => (
            <div 
              key={contact.id || contact.email} 
              className="p-6 bg-secondary rounded-lg border border-border shadow-sm"
            >
              {/* Header with contact type badge */}
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                <div className="mb-4 sm:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      contact.contact_type?.toLowerCase() === 'company'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {contact.contact_type ? formatLabel(contact.contact_type) : 'General'}
                    </span>
                    {contact.job_type && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {contact.job_type}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-text">
                    {contact.first_name} {contact.last_name}
                    {contact.position && ` - ${contact.position}`}
                  </h3>
                </div>
                
                <span className="text-sm text-text-light bg-background px-3 py-1 rounded">
                  {new Date(contact.created_at).toLocaleDateString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-text-light mb-2">Contact Information</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-text-light flex-shrink-0" />
                        <a 
                          href={`mailto:${contact.email}`}
                          className="text-primary hover:underline break-all"
                        >
                          {contact.email}
                        </a>
                      </div>
                      {contact.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-text-light flex-shrink-0" />
                          <a 
                            href={`tel:${contact.phone}`}
                            className="text-text hover:underline"
                          >
                            {contact.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {contact.company_name && (
                    <div>
                      <p className="text-sm font-semibold text-text-light mb-2">Company</p>
                      <p className="text-text font-medium">{contact.company_name}</p>
                    </div>
                  )}

                  {contact.position && (
                    <div>
                      <p className="text-sm font-semibold text-text-light mb-2">Position</p>
                      <p className="text-text">{contact.position}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {contact.hear_about && (
                    <div>
                      <p className="text-sm font-semibold text-text-light mb-2">
                        How they heard about us
                      </p>
                      <p className="text-text">{contact.hear_about}</p>
                    </div>
                  )}

                  {/* Resume Section - More prominent for individuals */}
                  {(contact.resume_url || contact.resume_key) && (
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <p className="text-sm font-semibold text-text-light mb-3">Resume Available</p>
                      <button
                        onClick={() => downloadResume(
                          contact
                        )}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors w-full justify-center"
                      >
                        <Download className="w-4 h-4" />
                        Download Resume
                      </button>
                      
                    </div>
                  )}
                </div>
              </div>

              {/* Message Section */}
              {contact.message && (
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm font-semibold text-text-light mb-3">Message</p>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="text-text whitespace-pre-wrap leading-relaxed">{contact.message}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

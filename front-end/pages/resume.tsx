import React from 'react';
import { FaPlus, FaEdit, FaEye, FaDownload, FaTrash } from 'react-icons/fa';

const Resume = () => {
  const resumes = [
    {
      id: 1,
      title: 'Software Developer Resume',
      lastModified: '2023-12-15',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Frontend Specialist Resume',
      lastModified: '2023-12-10',
      status: 'Draft',
    },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>My Resumes</h1>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
          }}
        >
          <FaPlus /> Create New Resume
        </button>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {resumes.map((resume) => (
          <div
            key={resume.id}
            style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>
                  {resume.title}
                </h3>
                <p style={{ color: '#6c757d', marginBottom: '0.5rem' }}>
                  Last modified: {resume.lastModified}
                </p>
                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    backgroundColor: resume.status === 'Active' ? '#e7f3ff' : '#f0f0f0',
                    color: resume.status === 'Active' ? '#0066cc' : '#666',
                  }}
                >
                  {resume.status}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  style={{
                    padding: '0.5rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    color: '#6c757d',
                  }}
                  title="View Resume"
                >
                  <FaEye />
                </button>
                <button
                  style={{
                    padding: '0.5rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    color: '#6c757d',
                  }}
                  title="Edit Resume"
                >
                  <FaEdit />
                </button>
                <button
                  style={{
                    padding: '0.5rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    color: '#6c757d',
                  }}
                  title="Download Resume"
                >
                  <FaDownload />
                </button>
                <button
                  style={{
                    padding: '0.5rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    color: '#dc3545',
                  }}
                  title="Delete Resume"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {resumes.length === 0 && (
        <div
          style={{
            textAlign: 'center',
            padding: '4rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
          }}
        >
          <h3 style={{ fontSize: '1.25rem', color: '#6c757d', marginBottom: '1rem' }}>
            No resumes created yet
          </h3>
          <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>
            Create your first resume to get started with job applications.
          </p>
          <button
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
            }}
          >
            Create Your First Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default Resume;
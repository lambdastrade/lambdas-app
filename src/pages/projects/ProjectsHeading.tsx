import React from 'react'

const ProjectsHeading = () => {
  return (
      <div className="font-jakarta p-2 flex items-center justify-between">
          <h3 className="text-xl  font-semibold text-gray-700">Projects</h3>
          <div className="mt-3 flex sm:mt-0 sm:ml-4">
              <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Edit
              </button>
              <button
                  type="button"
                  className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Create New
              </button>
          </div>
      </div>
  );
}

export default ProjectsHeading
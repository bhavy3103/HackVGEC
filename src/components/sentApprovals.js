export default function SentApprovals(props) {
  return (
    <div
      id="alert-additional-content-5"
      class="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800"
      role="alert"
    >
      <div class="flex items-center">
        <svg
          aria-hidden="true"
          class="w-5 h-5 mr-2 text-gray-800 dark:text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Info</span>
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-300">
          Pending Request - {props.topic}
        </h3>
      </div>
      <div class="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
        Project Title - {props.title}<br />
        Project Description - {props.description}<br />
        Faculty - {props.faculty}<br />
        Date - {props.date}<br />
      </div>
      <div class="flex">
        <button
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Cancel Request
        </button>
      </div>
    </div>
  );
}

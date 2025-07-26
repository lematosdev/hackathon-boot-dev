<script lang="ts">
  const links = [
    { href: '/', label: 'Home' },
    { href: '/character-creator', label: 'Character creator' },
    { href: '/pricing', label: 'Pricing' },
  ];
</script>

<nav class="z-50 border-b border-gray-700">
  <div class="mx-auto px-2 sm:px-6 lg:px-8 top-nav-bar-height">
    <div class="relative flex items-center justify-between h-full">
      <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            class="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <div class="flex-1 flex items-center justify-center sm:justify-evenly">
        <div class="h-full">
          <a href="/" class="text-xl font-bold">
            <img src="/logo.png" height="48" class="h-12" alt="Logo" />
          </a>
        </div>
        <div class="hidden md:flex lg:ml-2">
          <div class="flex text-sm h-full items-center lg:space-x-4">
            {#each links as { href, label }}
              <div class="group flex flex-col items-center justify-center">
                <a
                  {href}
                  class="text-gray-300 hover:text-white px-3 py-2 rounded"
                >
                  {label}
                </a>

                <div
                  style="max-width: 9rem;"
                  class="opacity-0 hover:opacity-100 pointer-events-none absolute top-[15px] z-10 flex w-full flex-grow-0 flex-col items-center group-hover:opacity-100"
                >
                  <svg
                    viewBox="0 0 179 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g opacity="0.4" filter="url(#filter0_f_32_1218)">
                      <ellipse
                        cx="89.5"
                        cy="50.5"
                        rx="48.5"
                        ry="9.5"
                        fill="#E5AE3C"
                      ></ellipse>
                    </g>
                    <path
                      d="M98 52H100.414L98.7071 50.2929L91.4142 43C90.6332 42.219 89.3668 42.219 88.5858 43L81.2929 50.2929L79.5858 52H82H98Z"
                      fill="url(#paint0_linear_32_1218)"
                    ></path>
                    <path
                      d="M98 52H100.414L98.7071 50.2929L91.4142 43C90.6332 42.219 89.3668 42.219 88.5858 43L81.2929 50.2929L79.5858 52H82H98Z"
                      fill="url(#pattern0_32_1218)"
                      fill-opacity="0.2"
                    ></path>
                    <path
                      d="M98 52H100.414L98.7071 50.2929L91.4142 43C90.6332 42.219 89.3668 42.219 88.5858 43L81.2929 50.2929L79.5858 52H82H98Z"
                      stroke="url(#paint1_linear_32_1218)"
                      stroke-width="2"
                    ></path>
                    <defs>
                      <filter
                        id="filter0_f_32_1218"
                        x="0.400002"
                        y="0.400002"
                        width="178.2"
                        height="100.2"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        ></feBlend>
                        <feGaussianBlur
                          stdDeviation="20.3"
                          result="effect1_foregroundBlur_32_1218"
                        ></feGaussianBlur>
                      </filter>
                      <pattern
                        id="pattern0_32_1218"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlink:href="#image0_32_1218"
                          transform="matrix(0.0038125 0 0 0.007625 -1.40625 -0.5)"
                        ></use>
                      </pattern>
                      <linearGradient
                        id="paint0_linear_32_1218"
                        x1="90"
                        y1="43"
                        x2="90"
                        y2="51"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop offset="1" stop-color="#CF9F3A"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_32_1218"
                        x1="90"
                        y1="43"
                        x2="90"
                        y2="51"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#B79652"></stop>
                        <stop offset="1" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg
                    viewBox="0 0 135 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="0.5"
                      x2="135"
                      y2="0.5"
                      stroke="url(#paint0_linear_25_58)"
                    ></line>
                    <defs>
                      <linearGradient
                        id="paint0_linear_25_58"
                        x1="0"
                        y1="1"
                        x2="135"
                        y2="1"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.01"
                          stop-color="#3C424F"
                          stop-opacity="0.0"
                        ></stop>
                        <stop offset="0.40" stop-color="#E5AE3C"></stop>
                        <stop offset="0.5" stop-color="#E5AE3C"></stop>
                        <stop offset="0.60" stop-color="#E5AE3C"></stop>
                        <stop
                          offset="0.99"
                          stop-color="#3C424F"
                          stop-opacity="0.0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="md:hidden" id="mobile-menu" style="display: none">
    <div class="px-2 pt-2 pb-3 space-y-1">
      {#each links as { href, label }}
        <a
          {href}
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
        >
          {label}
        </a>
      {/each}
    </div>
  </div>
</nav>

/**
 * This file is part of Go Forensics (https://www.goforensics.io/)
 * Copyright (C) 2022 Marten Mooij (https://www.mooijtech.com/)
 */
import {useEffect} from 'react'
import {
  AnnotationIcon,
  CheckIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  PhoneIcon,
  ScaleIcon,
} from '@heroicons/react/outline'
import {
  BookmarkIcon,
  FileTextIcon,
  HddIcon,
  PieChartIcon,
  PlugIcon,
  SearchIcon,
  ShieldIcon,
  UsersIcon
} from "react-line-awesome";
import {ChevronRightIcon} from "@heroicons/react/solid";
import LandingImage from "../assets/images/landing.svg";
import PasswordImage from "../assets/images/password.svg"
import ConnectWithTeamImage from "../assets/images/connect-with-team.png"
import Navigation from "../components/navigation";

const features = [
  {
    name: "Filesystem",
    description: "View the message, headers and attachments.",
    icon: HddIcon,
  },
  {
    name: "Search",
    description: "Advanced search powered by ElasticSearch.",
    icon: SearchIcon,
  },
  {
    name: "Bookmark",
    description: "Bookmarking and tagging makes it easy to keep track of your evidence.",
    icon: BookmarkIcon,
  },
  {
    name: "Report",
    description: "Create customizable reports to be presented in court.",
    icon: FileTextIcon,
  },
  {
    name: "Statistics",
    description: "Get insight into your evidence by showing statistics.",
    icon: PieChartIcon,
  },
  {
    name: "Team",
    description: "Working together with your team has never been easier.",
    icon: UsersIcon,
  },
  {
    name: "Integrations",
    description: "Integrates with Gmail, ProtonMail, Outlook, Yandex and more.",
    icon: PlugIcon,
  },
  {
    name: 'Anti-virus',
    description: 'Built-in virus scanner',
    icon: ShieldIcon,
  },
]

const plans = [
  {
    title: 'Starter',
    featured: false,
    priceMonthly: 24,
    priceYearly: 288,
    mainFeatures: [
      {id: 1, value: '5 projects'},
      {id: 2, value: '10GB storage'},
      {id: 3, value: 'Unlimited team members'},
    ],
  },
  {
    title: 'Scale',
    featured: true,
    priceMonthly: 159,
    priceYearly: 1908,
    mainFeatures: [
      {id: 1, value: 'Unlimited projects'},
      {id: 2, value: 'Unlimited storage'},
      {id: 3, value: 'Unlimited team members'},
      {id: 4, value: 'Self hosted'},
    ],
  },
  {
    title: 'Growth',
    featured: false,
    priceMonthly: 59,
    priceYearly: 708,
    mainFeatures: [
      {id: 1, value: '25 projects'},
      {id: 2, value: '100GB storage'},
      {id: 3, value: 'Unlimited team members'},
    ],
  },
]

const teamFeatures = [
  {
    id: 1,
    name: 'Invite your team',
    description:
        'Receive live notifications when actions are performed.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'Bookmark your evidence',
    description:
        'All your important evidence in one place.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Create your report',
    description:
        'Easily create reports to be presented in court.',
    icon: LightningBoltIcon,
  },
]
const privacyFeatures = [
  {
    id: 1,
    name: 'GDPR compliant',
    description:
        'We respect your privacy and allow businesses to setup our solution locally, feel free to contact us.',
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: 'Encryption',
    description:
        'All your data is encrypted at rest and we safely communicate over TLS.',
    icon: MailIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function IndexView() {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = process.env.CRISP_WEBSITE_ID;

    (function () {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  })

  return (
      <Navigation>
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div
                    className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <a
                        href="/beta"
                        className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span
                          className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                        Join Discord
                      </span>
                      <span className="ml-4 text-sm">Click here to join</span>
                      <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500"
                                        aria-hidden="true"/>
                    </a>
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Find the needle</span>
                      <span className="block text-indigo-400">in your haystack</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      <b>Go Forensics</b> allows you to analyze and present digital evidence to
                      be presented in court. Supports PST, EML and IMAP (email files).<br/>
                      <a href={"/beta"} target={"_blank"} className={"hover:underline"}>Open-source</a>.
                      Made and hosted in Europe.
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <form action="/beta" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                        <div className="sm:flex">
                          <div className="min-w-0 flex-1">
                            <label htmlFor="email" className="sr-only">
                              Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                            />
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                                type="submit"
                                className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                            >
                              Start free trial
                            </button>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                          Start your free 7-day trial, no credit card necessary.
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src={LandingImage}
                        alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-700">
            <div
                className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Email forensics built for
                efficiency</h2>
              <p className="mt-4 max-w-3xl text-lg text-indigo-200">
                <b>Go Forensics</b> allows you
                to <b>search</b>, <b>filter</b>, <b>bookmark</b>, <b>tag</b> and <b>create reports</b>.
              </p>
              <div
                  className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                {features.map((feature) => (
                    <div key={feature.name}>
                      <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <feature.icon className="la la-2x text-white" aria-hidden="true"/>
                </span>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                        <p className="mt-2 text-base text-indigo-200">{feature.description}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-indigo-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by forensic teams
                  from all over the world</h2>
                <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
                  <b>Go Forensics</b> is used by lawyers, journalists, government, corporate
                  companies and users like you
                </p>
              </div>
              <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                <div className="flex flex-col mt-10 sm:mt-0">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Indexed
                    emails
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-white">100k+</dd>
                </div>
                <div className="flex flex-col mt-10 sm:mt-0">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Support</dt>
                  <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Uptime</dt>
                  <dd className="order-1 text-5xl font-extrabold text-white">99%</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-gray-50">
            <div className="relative bg-indigo-600">
              {/* Overlapping background */}
              <div aria-hidden="true"
                   className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"/>

              <div
                  className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                  <span className="block lg:inline">Simple pricing, </span>
                  <span className="block lg:inline">no commitment.</span>
                </h1>
                <p className="mt-4 text-xl text-indigo-100">
                  Everything you need, nothing you don't. Pick a plan that best suits your business.
                </p>
              </div>

              <h2 className="sr-only">Plans</h2>

              {/* Toggle */}
              {/*<div className="relative mt-12 flex justify-center sm:mt-16">*/}
              {/*    <div className="bg-indigo-700 p-0.5 rounded-lg flex">*/}
              {/*        <button*/}
              {/*            type="button"*/}
              {/*            className="relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"*/}
              {/*        >*/}
              {/*            Monthly billing*/}
              {/*        </button>*/}
              {/*        <button*/}
              {/*            type="button"*/}
              {/*            className="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"*/}
              {/*        >*/}
              {/*            Yearly billing*/}
              {/*        </button>*/}
              {/*    </div>*/}
              {/*</div>*/}

              {/* Cards */}
              <div
                  className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
                {/* Decorative background */}
                <div
                    aria-hidden="true"
                    className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"
                />

                <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
                  {plans.map((plan) => (
                      <div
                          key={plan.title}
                          className={classNames(
                              plan.featured ? 'bg-white ring-2 ring-indigo-700 shadow-md' : 'bg-indigo-700 lg:bg-transparent',
                              'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                          )}
                      >
                        <div>
                          <h3
                              className={classNames(
                                  plan.featured ? 'text-indigo-600' : 'text-white',
                                  'text-sm font-semibold uppercase tracking-wide'
                              )}
                          >
                            {plan.title}
                          </h3>
                          <div
                              className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                            <div className="mt-3 flex items-center">
                              <p
                                  className={classNames(
                                      plan.featured ? 'text-indigo-600' : 'text-white',
                                      'text-4xl font-extrabold tracking-tight'
                                  )}
                              >
                                €{plan.priceMonthly}
                              </p>
                              <div className="ml-4">
                                <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
                                  EUR / mo
                                </p>
                                <p className={classNames(plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm')}>
                                  Yearly (€{plan.priceYearly})
                                </p>
                              </div>
                            </div>
                            <a
                                href="/beta"
                                className={classNames(
                                    plan.featured
                                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                        : 'bg-white text-indigo-600 hover:bg-indigo-50',
                                    'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                                )}
                            >
                              Buy {plan.title}
                            </a>
                          </div>
                        </div>
                        <h4 className="sr-only">Features</h4>
                        <ul
                            role="list"
                            className={classNames(
                                plan.featured
                                    ? 'border-gray-200 divide-gray-200'
                                    : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
                                'mt-7 border-t divide-y lg:border-t-0'
                            )}
                        >
                          {plan.mainFeatures.map((mainFeature) => (
                              <li key={mainFeature.id} className="py-3 flex items-center">
                                <CheckIcon
                                    className={classNames(
                                        plan.featured ? 'text-indigo-500' : 'text-indigo-200',
                                        'w-5 h-5 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                />
                                <span
                                    className={classNames(
                                        plan.featured ? 'text-gray-600' : 'text-white',
                                        'ml-3 text-sm font-medium'
                                    )}
                                >
                        {mainFeature.value}
                      </span>
                              </li>
                          ))}
                        </ul>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
            <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
              <svg
                  className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
                  width={404}
                  height={784}
                  fill="none"
                  viewBox="0 0 404 784"
                  aria-hidden="true"
              >
                <defs>
                  <pattern
                      id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                          fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"/>
              </svg>

              <div className="relative">
                <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  A better way to investigate emails
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                  <b>Go Forensics</b> makes it easy to find the needle in your haystack.
                </p>
              </div>

              <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="relative">
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    Connect with your team
                  </h3>
                  <p className="mt-3 text-lg text-gray-500">
                    We make it easy to quickly perform email investigations with your team.
                  </p>

                  <dl className="mt-10 space-y-10">
                    {teamFeatures.map((item) => (
                        <div key={item.id} className="relative">
                          <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                              <item.icon className="h-6 w-6" aria-hidden="true"/>
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                          </dt>
                          <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                        </div>
                    ))}
                  </dl>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                  <img
                      className="relative mx-auto"
                      width={490}
                      src={ConnectWithTeamImage}
                      alt=""
                  />
                </div>
              </div>

              <svg
                  className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
                  width={404}
                  height={784}
                  fill="none"
                  viewBox="0 0 404 784"
                  aria-hidden="true"
              >
                <defs>
                  <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                          fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"/>
              </svg>

              <div className="relative mt-12 sm:mt-16 lg:mt-24">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                  <div className="lg:col-start-2">
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">We
                      take your privacy seriously</h3>
                    <p className="mt-3 text-lg text-gray-500">
                      View our Privacy Policy to learn more.
                    </p>

                    <dl className="mt-10 space-y-10">
                      {privacyFeatures.map((item) => (
                          <div key={item.id} className="relative">
                            <dt>
                              <div
                                  className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <item.icon className="h-6 w-6" aria-hidden="true"/>
                              </div>
                              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                          </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                    <img
                        className="relative mx-auto"
                        width={490}
                        src={PasswordImage}
                        alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50">
            <div
                className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Ready to close your case?</span>
                <span className="block text-indigo-600">Start your free trial today.</span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                      href="/beta"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Get started
                  </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <a
                      href="/beta"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-gray-50"> {/* bg-white */}
            <div className="absolute inset-0">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"/>
            </div>
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
              <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                <div className="max-w-lg mx-auto">
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get
                    in touch</h2>
                  <p className="mt-3 text-lg leading-6 text-gray-500">
                    Feel free to contact us anytime.
                  </p>
                  <dl className="mt-8 text-base text-gray-500">
                    <div className="mt-6">
                      <dt className="sr-only">Phone number</dt>
                      <dd className="flex">
                        <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400"
                                   aria-hidden="true"/>
                        <span className="ml-3">+31 6 30 53 47 67</span>
                      </dd>
                    </div>
                    <div className="mt-3">
                      <dt className="sr-only">Email</dt>
                      <dd className="flex">
                        <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400"
                                  aria-hidden="true"/>
                        <span className="ml-3">info@goforensics.io</span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              {/*<div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">*/}
              {/*  <div className="max-w-lg mx-auto lg:max-w-none">*/}
              {/*    <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">*/}
              {/*      <div>*/}
              {/*        <label htmlFor="full-name" className="sr-only">*/}
              {/*          Full name*/}
              {/*        </label>*/}
              {/*        <input*/}
              {/*            type="text"*/}
              {/*            name="full-name"*/}
              {/*            id="full-name"*/}
              {/*            autoComplete="name"*/}
              {/*            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"*/}
              {/*            placeholder="Full name"*/}
              {/*        />*/}
              {/*      </div>*/}
              {/*      <div>*/}
              {/*        <label htmlFor="email" className="sr-only">*/}
              {/*          Email*/}
              {/*        </label>*/}
              {/*        <input*/}
              {/*            id="email"*/}
              {/*            name="email"*/}
              {/*            type="email"*/}
              {/*            autoComplete="email"*/}
              {/*            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"*/}
              {/*            placeholder="Email"*/}
              {/*        />*/}
              {/*      </div>*/}
              {/*      <div>*/}
              {/*        <label htmlFor="phone" className="sr-only">*/}
              {/*          Phone*/}
              {/*        </label>*/}
              {/*        <input*/}
              {/*            type="text"*/}
              {/*            name="phone"*/}
              {/*            id="phone"*/}
              {/*            autoComplete="tel"*/}
              {/*            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"*/}
              {/*            placeholder="Phone"*/}
              {/*        />*/}
              {/*      </div>*/}
              {/*      <div>*/}
              {/*        <label htmlFor="message" className="sr-only">*/}
              {/*          Message*/}
              {/*        </label>*/}
              {/*        <textarea*/}
              {/*            id="message"*/}
              {/*            name="message"*/}
              {/*            rows={4}*/}
              {/*            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"*/}
              {/*            placeholder="Message"*/}
              {/*            defaultValue={''}*/}
              {/*        />*/}
              {/*      </div>*/}
              {/*      <div>*/}
              {/*        <button*/}
              {/*            type="submit"*/}
              {/*            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"*/}
              {/*        >*/}
              {/*          Submit*/}
              {/*        </button>*/}
              {/*      </div>*/}
              {/*    </form>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>

          <footer className="bg-gray-800" aria-labelledby="footerHeading">
            <h2 id="footerHeading" className="sr-only">
              Footer
            </h2>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-16 lg:px-8">
              <p className="text-base text-gray-400 md:mt-0 md:order-1">
                &copy; 2022 Go Forensics. All rights reserved.
              </p>
            </div>
          </footer>

        </main>
      </Navigation>
  )
}
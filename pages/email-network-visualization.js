/**
 * This file is part of Go Forensics (https://www.goforensics.io/)
 * Copyright (C) 2022 Marten Mooij (https://www.mooijtech.com/)
 */
import React from "react";
import {ChevronRightIcon} from "@heroicons/react/solid";
import TeamImageWhite from "../assets/images/team-white.svg"
import OutlookIcon from "../assets/images/outlook.svg"
import {useRouter} from "next/router";
import Navigation from "../components/navigation";

export default function EmailNetworkVisualization() {
    const router = useRouter();

    const onOutlookLogin = () => {
        router.push("/beta")
    }

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
                                        <span className="block">A people-centric view of your email life</span>
                                        <span className="block text-indigo-400">using only your metadata</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Once you log in, <b>Go Forensics</b> will use only the From, To, CC and
                                        Timestamp fields of the emails in the account you are signing in with.
                                        It will not access the subject or the body content of any of your emails.
                                    </p>
                                    <div className="mt-10 sm:mt-12">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={onOutlookLogin}
                                        >
                                            <img src={OutlookIcon} alt="" className="-ml-1 mr-3 h-5 w-5"
                                                 aria-hidden="true"/>
                                            Get started with Outlook, Hotmail or Live
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:m-0 lg:relative">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                    <img
                                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full 2xl:w-auto lg:w-full lg:max-w-none"
                                        src={TeamImageWhite}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Navigation>
    )
}
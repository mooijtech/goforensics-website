/**
 * This file is part of Go Forensics (https://www.goforensics.io/)
 * Copyright (C) 2022 Marten Mooij (https://www.mooijtech.com/)
 */
import React, {useEffect, useState} from "react";
import {Combobox} from "@headlessui/react";
import {CheckIcon, ChevronRightIcon, SelectorIcon} from "@heroicons/react/solid";
import WikiLeaksImage from "../assets/images/wikileaks.svg"
import Navigation from "../components/navigation";
import {useRouter} from "next/router";

const datasets = [
    {id: 1, name: 'Hillary Clinton DNC'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function WikiLeaks() {
    const router = useRouter();

    const [datasetQuery, setDatasetQuery] = useState('')
    const [selectedDataset, setSelectedDataset] = useState({})

    const filteredDatasets =
        datasetQuery === ''
            ? datasets
            : datasets.filter((dataset) => {
                return dataset.name.toLowerCase().includes(datasetQuery.toLowerCase())
            })

    useEffect(() => {
        setSelectedDataset(datasets[0]);
    }, [])

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
                                        <span className="block">WikiLeaks alternative</span>
                                        <span className="block text-indigo-400">for everything email</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        <b>Go Forensics</b> allows you to analyze and present digital evidence to be
                                        presented in court. Get started by selecting a dataset below.
                                    </p>
                                    <div className="mt-10 sm:mt-12">
                                        <Combobox as="div" value={selectedDataset} onChange={setSelectedDataset}>
                                            <Combobox.Label
                                                className="block text-sm font-medium text-white">Dataset</Combobox.Label>
                                            <div className="relative mt-1">
                                                <Combobox.Input
                                                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                                    onChange={(event) => setDatasetQuery(event.target.value)}
                                                    displayValue={(dataset) => dataset.name}
                                                />
                                                <Combobox.Button
                                                    className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                                    <SelectorIcon className="h-5 w-5 text-gray-400"
                                                                  aria-hidden="true"/>
                                                </Combobox.Button>

                                                {filteredDatasets.length > 0 && (
                                                    <Combobox.Options
                                                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {filteredDatasets.map((dataset) => (
                                                            <Combobox.Option
                                                                key={dataset.id}
                                                                value={dataset}
                                                                className={({active}) =>
                                                                    classNames(
                                                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                                                        active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                                                    )
                                                                }
                                                            >
                                                                {({active, selected}) => (
                                                                    <>
                                                                            <span
                                                                                className={classNames('block truncate', selected && 'font-semibold')}>{dataset.name}</span>

                                                                        {selected && (
                                                                            <span
                                                                                className={classNames(
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                                    active ? 'text-white' : 'text-indigo-600'
                                                                                )}
                                                                            >
                        <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                      </span>
                                                                        )}
                                                                    </>
                                                                )}
                                                            </Combobox.Option>
                                                        ))}
                                                    </Combobox.Options>
                                                )}
                                            </div>
                                        </Combobox>

                                        <button
                                            type="button"
                                            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={() => {
                                                router.push("/beta")
                                            }}
                                        >
                                            View dataset
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:m-0 lg:relative">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                    <img
                                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full 2xl:w-auto lg:w-full lg:max-w-none"
                                        src={WikiLeaksImage}
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
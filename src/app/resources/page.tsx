"use client";

import React, { useState, useEffect } from "react";
import ResourceBox from "@/components/boxes/ResourceBox";
import ResourceData from "../../data/resources.json";

const Resources = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedIsFree, setSelectedIsFree] = useState("");
  const [availableTypes, setAvailableTypes] = useState([]);
  //   const [isFreeOptions, setIsFreeOptions] = useState([]);

  useEffect(() => {
    //@ts-ignore
    const types = [...new Set(ResourceData.map((item) => item.type))];
    //@ts-ignore
    setAvailableTypes(types);
  }, []);

  //@ts-ignore
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  //@ts-ignore
  const handleIsFreeChange = (e) => {
    setSelectedIsFree(e.target.value);
  };

  //@ts-ignore
  const filterResources = (resource) => {
    if (selectedType && resource.type !== selectedType) {
      return false;
    }

    if (selectedIsFree && resource.isFree !== (selectedIsFree === "true")) {
      return false;
    }

    return true;
  };

  return (
    <main className="container mx-auto px-4">
      <header className="my-8">
        <h1 className="text-2xl font-bold">Resources</h1>
        <p className="italic">When we rescue others, we rescue ourselves.</p>
      </header>

      <div className="flex gap-4 mb-4">
        <div>
          <label htmlFor="typeFilter" className="mr-2">
            Type:
          </label>
          <select
            id="typeFilter"
            value={selectedType}
            onChange={handleTypeChange}
            className="border border-gray-300 rounded px-2 py-1 text-black"
          >
            <option value="">All</option>
            {availableTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="isFreeFilter" className="mr-2">
            Is Free:
          </label>
          <select
            id="isFreeFilter"
            value={selectedIsFree}
            onChange={handleIsFreeChange}
            className="border border-gray-300 rounded px-2 py-1 text-black"
          >
            <option value="">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
      <section id="resources">
        <div className="mx auto grid gap-4">
          {ResourceData.filter(filterResources).map((resource, index) => (
            <ResourceBox {...resource} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Resources;

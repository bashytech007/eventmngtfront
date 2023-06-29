import React from "react"
import { useRef } from "react";
import { axiosInstance, postRequest } from "../../../utils/api";




export default function CreateEvent() {
  
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const typeRef = useRef(null);
  const  locationRef = useRef(null);
 const  dateRef=useRef(null)
 const  TimeRef=useRef(null)


  async function handleSubmit(e) {
     e.preventDefault();
    const eventBody={eventTitle:titleRef.current.value,
      eventCategory:categoryRef.current.value,
      eventType:typeRef.current.value,
      eventLocation:locationRef.current.value,
      eventDate:dateRef.current.value,
      eventTime:TimeRef.current.value,
      
    }
    const eventResponse=await postRequest("/events",eventBody)
    // console.log(eventBody);
    console.log(eventResponse)
  }
  return (
    <div className="w-full">
      <h1 className="text-black text-2xl text-center">Basic Info</h1>
      <p className="text-center">
        Name your event and tell event-goers why they should come. Add details
        that highlight what makes it unique
      </p>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={handleSubmit}
      >
        <div className="relative w-96 mt-4">
          <input
            type="text"
            placeholder="Be clear and descriptive"
            className="border border-b-2 px-2 py-6 border-b-gray-200 w-full"
            ref={titleRef}
          />
          <span className="absolute left-3 top-0 z-10 text-sm text-red-600">
            Event Title
          </span>
        </div>
        <div className="relative mt-4 w-96">
          <select type="select" className="px-2 py-8 w-full bg-transparent">
            <option value="bash">bash</option>
          </select>
          <span className="absolute top-0 left-2 text-base text-red-600">
            Organizer
          </span>
        </div>
        <p>
          This profile describes a unique organizer and shows all of the events
          on one page.
        </p>
        <div>
          <div className="flex flex-col-3 items-center space-x-2  mt-4">
            <select
              type="select"
              ref={typeRef}
              className="px-2 py-4 w-full bg-transparent  border-2 border-blue-400"
            >
              <option value="bash">Type</option>
              <option value="bash">Appearnce or Signing</option>
              <option value="bash">Attraction</option>
              <option value="bash">Camp,Trip,Retreat</option>
              <option value="bash">Class,training or workshop</option>
              <option value="bash">Concert </option>
              <option value="bash">convetion</option>
              <option value="bash">Confrences</option>
              <option value="bash">Dinner or Gala</option>
              <option value="bash">Festival or fair</option>
              <option value="bash">Other</option>
            </select>
            <select
              type="select"
              ref={categoryRef}
              className="px-2 py-4 w-full bg-transparent border-2 border-blue-400"
            >
              <option value="bash">Category</option>
              <option value="bash">Auto, Boat & Air</option>
              <option value="bash">Business Professional</option>
              <option value="bash">Charity and Causes</option>
              <option value="bash">Family and Education</option>
              <option value="bash">Fashion and Beauty</option>
              <option value="bash">Film media and Entertainment</option>
              <option value="bash">Food and drink</option>
              <option value="bash">Government & Politics</option>
              <option value="bash">Health & Wellness</option>
              <option value="bash">Hobbies and special interest</option>
              <option value="bash">Home and lifestyle</option>
              <option value="bash">Other</option>
            </select>

            <select
              type="select"
              className="px-2 py-4 w-full bg-transparent lg:hidden border-2 border-blue-400"
            >
              <option value="bash" className="lg:hidden">
                sub category
              </option>
            </select>
          </div>
          <h4 className="text-md mt-2">Tags</h4>
          <p>
            Improve discoverability of your event by adding tags relevant to the
            subject matter.
          </p>
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Add searchkeywords to your event"
              className="border border-b-2 px-2 py-6 border-b-gray-200 w-full"
            />
            <span className="absolute left-3 top-0 text-red-600">
              Press enter to add a tag
            </span>
            <div className="flex justify-between mb-4">
              <span>0/10 tags</span>
              <span>0/25</span>
            </div>
          </div>
          <hr />
        </div>
        <h4 className="text-l mt-4">Location</h4>
        <p>
          Help people in the area discover your event and let attendees know
          where to show up.
        </p>
        <div className="flex items-center">
          <button className="border-2 bg-violet-400 rounded-md border-b-violet-300 px-2 py-4 text-white">
            Venue
          </button>
          <button className="border-2 bg-violet-400 rounded-md border-b-violet-300 px-2 py-4 text-white">
            Online Event
          </button>
          <button className="border-2 bg-violet-400 rounded-md border-b-violet-300 px-2 py-4 text-white">
            To be Announced
          </button>
          <input
            type="text"
            ref={locationRef}
            placeholder="location"
            className="border border-b-2 px-2 py-6 border-b-gray-200 w-full"
          />
        </div>
        <div>
          <input
            type="text"
            ref={dateRef}
            placeholder="text"
            className="border border-b-2 px-2 py-6 border-b-gray-200 w-full"
          />
        </div>
        <div>
          <input
            type="text"
            ref={TimeRef}
            placeholder="time"
            className="border border-b-2 px-2 py-6 border-b-gray-200 w-full"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


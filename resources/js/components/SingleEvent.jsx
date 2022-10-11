import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleEvent } from "../Store/Actions/EventAction";

function SingleEvent() {
    const dispatch = useDispatch();
    //get Id from url
    const params = useParams();

    useEffect(() => {
        dispatch(getSingleEvent(params.id));
    }, []);

    const event = useSelector((state) => state.event);
    // console.log(event);
    const { loading, error, event: singleEvent } = event;
    console.log(singleEvent);
    return (
        <div className="event  bg-green-100">
            <div className="event-top">
                <div className="event-top-left">
                    <div className="event-image">
                        <img
                            className="event-image"
                            src="https://picsum.photos/300/200"
                        />
                    </div>
                </div>
                <div className="event-top-right">
                    <h2>{singleEvent?.name}</h2>
                    <br />
                    <h3>
                        The Grand Event is a great event that will be held in
                        the Chancery , puzzles
                    </h3>
                    <p>
                        Start Date: <small>{singleEvent?.start_date} </small>
                    </p>

                    <p>
                        Lead Date: <small> {singleEvent?.lead_date}</small>
                    </p>
                    <p>{singleEvent?.department?.name}</p>
                    <p>{singleEvent?.category?.name}</p>
                    <p>Location: {singleEvent?.venue}</p>

                    <p>Event Organizer: Rhino</p>
                    <p>Status: Ontime</p>
                </div>
            </div>
            <div className="event-bottom">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                    <thead className="border-b">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4"
                                            >
                                                Activity
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4"
                                            >
                                                Coordinator
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4"
                                            >
                                                Start Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b bg-green-500 border-green-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Arrangements
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Coordinator 1
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                12/12/2020
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-orange-500 border-red-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Budgetting
                                            </td>
                                            <td className="text-sm text-gray-500 font-light px-6 py-4 whitespace-nowrap">
                                                Treasurer
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                12/12/2020
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-red-500 border-yellow-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Item Purchasing
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Treasurer
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                12/12/2020
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button>Add Activity</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleEvent;

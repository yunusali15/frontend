import communal from "./venue-images/communal-hall.png";
import mpc from "./venue-images/MPC.png";
import heritageRoom from "./venue-images/heritage-room.png";
import squashCourt from "./venue-images/squash-court.png";
import band from "./venue-images/band-room.png";
import recreation from "./venue-images/recreation-room.png";
import dance from "./venue-images/dance-room.png";
import media from "./venue-images/media-room.png";
import meeting from "./venue-images/meeting-room.png";
import tennis from "./venue-images/tennis-court.png";
import gym from "./venue-images/gym.png";

const obj = {
  bookingRequest: {
    timingSlots: [8, 9],
    isApproved: true,
    isRejected: false,
    isCancelled: false,
    bookingIds: [
      {
        _id: "611c91737bfb5a2325fc01bb",
        email: "keviiweb2@gmail.com",
        venue: "6100d84eb4051df2f0baef1f",
        date: 1629936000000,
        timingSlot: 8,
        notes: "Birthday Party SUPER SUPER DUPER FOR REAL PLS",
        createdAt: "2021-08-18T04:49:55.745Z",
        updatedAt: "2021-08-18T04:49:55.745Z",
        __v: 0,
      },
      {
        _id: "611c91737bfb5a2325fc01bc",
        email: "keviiweb2@gmail.com",
        venue: "6100d84eb4051df2f0baef1f",
        date: 1629936000000,
        timingSlot: 9,
        notes: "Birthday Party SUPER SUPER DUPER FOR REAL PLS",
        createdAt: "2021-08-18T04:49:55.760Z",
        updatedAt: "2021-08-18T04:49:55.760Z",
        __v: 0,
      },
    ],
    conflictingRequest: [],
    cca: "Block Committee E",
    _id: "611c91737bfb5a2325fc01ba",
    email: "keviiweb2@gmail.com",
    venue: {
      priorityEmails: [],
      visible: true,
      isChildVenue: false,
      childVenues: [
        "6102602857bab95b394ae1ee",
        "61057f55199c320b953b16bb",
        "61066c18d5c2491eca67d0a2",
        "61123657c773690015aa79d9",
      ],
      isInstantBook: false,
      _id: "6100d84eb4051df2f0baef1f",
      name: "Comms Hall",
      capacity: 4,
      openingHours: "8am-11pm",
      description: "Just a place in KE will low ceilings.",
      __v: 4,
      createdAt: "2021-07-29T08:00:40.030Z",
      updatedAt: "2021-08-18T04:59:43.375Z",
      image: "/img/band-room.jpeg",
    },
    date: 1629936000000,
    notes: "Birthday Party SUPER SUPER DUPER FOR REAL PLS",
    createdAt: "2021-08-18T04:49:55.489Z",
    updatedAt: "2021-08-18T04:49:55.818Z",
    __v: 1,
  },
};

const DATA = [
  {
    venueName: "Communal Hall",
    venueID: "communal",
    venueImage: communal,
  },
  {
    venueName: "Multi Purpose Court",
    venueID: "MPC",
    venueImage: mpc,
  },
  {
    venueName: "Squash Court",
    venueID: "squash",
    venueImage: squashCourt,
  },
  {
    venueName: "Heritage Room",
    venueID: "heritage",
    venueImage: heritageRoom,
  },
  {
    venueName: "Tennis Court",
    venueID: "tennis",
    venueImage: tennis,
  },
  {
    venueName: "Dance Room",
    venueID: "dance",
    venueImage: dance,
  },
  {
    venueName: "Gym",
    venueID: "gym",
    venueImage: gym,
  },
  {
    venueName: "Band Room",
    venueID: "band",
    venueImage: band,
  },
  {
    venueName: "Meeting Room",
    venueID: "meeting",
    venueImage: meeting,
  },
  {
    venueName: "Recreation Room",
    venueID: "recreation",
    venueImage: recreation,
  },
  {
    venueName: "Media Room",
    venueID: "media",
    venueImage: media,
  },
];

export default DATA;

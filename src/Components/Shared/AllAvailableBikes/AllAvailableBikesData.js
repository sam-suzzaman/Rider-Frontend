// Images:
import first from "../../../assets/bikes/1.jpg";
import second from "../../../assets/bikes/2.jpg";
import third from "../../../assets/bikes/3.jpg";
import fourth from "../../../assets/bikes/4.jpg";
import fifth from "../../../assets/bikes/5.jpg";
import sixth from "../../../assets/bikes/6.jpg";
import seventh from "../../../assets/bikes/7.jpg";
import eighth from "../../../assets/bikes/8.jpg";
import nineth from "../../../assets/bikes/9.jpg";
import ten from "../../../assets/bikes/10.jpg";
import eleven from "../../../assets/bikes/11.jpg";
import twelve from "../../../assets/bikes/12.jpg";
import thirteen from "../../../assets/bikes/13.jpg";
import fourteen from "../../../assets/bikes/14.jpg";
import fifteen from "../../../assets/bikes/15.jpg";
import sixteen from "../../../assets/bikes/16.jpg";
import seventeen from "../../../assets/bikes/17.jpg";
import eighteen from "../../../assets/bikes/18.jpg";
import nineteen from "../../../assets/bikes/19.jpg";
import twenty from "../../../assets/bikes/20.jpg";

// Data Array
const AllAvailableBikesData = [
    {
        _id: 1,
        title: "Men’s S-Works Tarmac Ultralight",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: first,
    },
    {
        _id: 2,
        title: "Men’s S-Works Tarmac Ultralight",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: second,
    },
    {
        _id: 3,
        title: "S-Works Roubaix Dura-Ace Di2",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: third,
    },
    {
        _id: 4,
        title: "Comp Alloy 6Fattie/29",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: fourth,
    },
    {
        _id: 5,
        title: "Trek Emonda SLR 9 – 2018",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Female",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: fifth,
    },
    {
        _id: 6,
        title: "Emonda SLR 10 – 2016",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: sixth,
    },
    {
        _id: 7,
        title: "Trek Madone 9.9 – 2016",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: seventh,
    },
    {
        _id: 8,
        title: "Electra Ticino 7D – 2017",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Feale",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: eighth,
    },
    {
        _id: 9,
        title: "Trek Madone 9.9 – 2016",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: nineth,
    },
    {
        _id: 10,
        title: "Men’s Epic Comp",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: ten,
    },
    {
        _id: 11,
        title: "Stumpjumper Comp Alloy 29/6Fattie",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: eleven,
    },
    {
        _id: 12,
        title: "Trek Madone 9.9 – 2016",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: twelve,
    },
    {
        _id: 13,
        title: "Electra Ticino 7D – 2017",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: thirteen,
    },
    {
        _id: 14,
        title: "Trek Madone 9.9 – 2016",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: fourteen,
    },
    {
        _id: 15,
        title: "Trek Madone 9.5 Women’s – 2018",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Female",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: fifteen,
    },
    {
        _id: 16,
        title: "S-Works Venge ViAS Disc Di2",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Female",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: sixteen,
    },
    {
        _id: 17,
        title: "Men’s S-Works Tarmac Ultralight",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Female",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: seventeen,
    },
    {
        _id: 18,
        title: "Electra Ticino 7D – 2017",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: eighteen,
    },
    {
        _id: 19,
        title: "Trek Madone 9.9 – 2016",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Male",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: nineteen,
    },
    {
        _id: 20,
        title: "Trek Emonda SLR 9 – 2018",
        des: `Every detail of the Emonda line, from frame design to each component choice on every model, serves the same audacious goal: to create the lightest line of production road bikes ever offered.

        The entire Emonda line is unbelievably light, with sensational ride-tuned balance and handling that elevate Trek ride performance to a whole new level.`,
        suitableFor: "Female",
        bikeComponents: {
            "Back Light": 1,
            Carrier: 1,
            "Front Light": 1,
            Helmet: 1,
            "Bike Locker": 1,
            "water bottle": 1,
        },
        carryPerson: 1,
        price: 20,
        unit: "hour",
        rating: 4.4,
        features: [
            "Back Light",
            "Bike Lock",
            "Carrier",
            "Front Light",
            "Hand Gloves",
            "Helmets",
            "Rain Coat",
        ],
        photoURL: twenty,
    },
];

export default AllAvailableBikesData;

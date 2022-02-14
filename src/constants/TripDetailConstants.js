export const tripDetails = {
    trip: [
        { label: 'Your Trip', type: 'header' },
        { label: null, type: 'important', index: 'estimated_arrival', date: true},
        { label: 'Estimated arrival time at ', type: 'subtitle', index: 'dropoff_location.name' },
        { type: 'grid', content: [
            { label: 'Estimated Fare:', type: 'grid', index_type: 'range', index1: 'estimated_fare_min', index2: 'estimated_fare_max',  size: 'third', icon: 'Info_icon.png' },
            { label: 'Passengers:', type: 'grid', index_type: 'range', index1: 'passengers_min', index2: 'passengers_max',  size: 'third' },
            { label: 'Payment:', type: 'grid', index: 'payment',  size: 'third' },
        ]},
        { type: 'details', label: null, index:'notes' },
        { type: 'button', label: 'Cancel Trip', disabled: true}
    ],

    driver: [
        { type: 'image', img: 'driver', width: '100%', height:'75%' },
        { label: 'Your Driver', type: 'important', index: 'name'},
        { label: null, type: 'details', index: 'bio' },
        { type: 'button', label: 'Contact Driver', disabled: true}
    ],

    vehicle: [
        { type: 'image', img: 'vehicle', width: '50%', height: '45%' },
        { label: 'Your Vehicle', type: 'important', index: 'license'},
        { type: 'grid', content: [
            { label: 'Make/ Model', type: 'grid', index: 'make',  size: 'half' },
            { label: 'Color', type: 'grid', index: 'color',  size: 'half'}
        ]},
        { type: 'button', label: 'Identity Vehicle', disabled: true},
    ],

    vibe: [
        { type: 'image', img: 'map', icon: 'Map_Icon' , with: '100%', height: '75%'},
        { label: 'Your Trip', type: 'important', index: 'trip.estimated_arrival'},
        { label: 'Estimated arrival time at ', type: 'subtitle', index: 'trip.estimated_arrival' },
        { type: 'grid', content: [
            { label: 'Current Vibe', type: 'grid', index: 'name',  size: 'full' }
        ]},
        { type: 'button', label: 'Change Vehicle Vibe', disabled: false },
    ]
    
};

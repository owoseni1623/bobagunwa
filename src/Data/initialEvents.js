// Initial events data
const initialEvents = [
    {
      id: 1,
      title: 'Monthly Meeting',
      type: 'recurring-monthly',
      description: 'Regular monthly meeting for all members',
      schedule: 'Every third Sunday of the month',
      location: 'Main Hall',
      isHighPriority: true,
      startTime: '14:00',
      endTime: '16:00',
      reminderSet: true
    },
    {
      id: 2,
      title: 'Ago Iwoye Day Festival',
      type: 'recurring-yearly',
      description: 'Annual cultural festival celebrating our heritage',
      schedule: 'October (Annual)',
      location: 'Ago Iwoye Town',
      isHighPriority: true,
      startTime: '09:00',
      endTime: '21:00',
      reminderSet: true
    },
    {
      id: 3,
      title: 'Ojude Oba Festival',
      type: 'yearly',
      description: 'Traditional festival honoring our cultural heritage',
      schedule: 'Date varies annually',
      location: 'Palace Ground',
      isHighPriority: true,
      startTime: '10:00',
      endTime: '18:00',
      reminderSet: true
    },
    {
      id: 4,
      title: 'Yearly Prayer with the King',
      type: 'recurring-yearly',
      description: 'Annual prayer session with our beloved King',
      schedule: 'Second week of January',
      location: 'Palace',
      isHighPriority: true,
      startTime: '08:00',
      endTime: '10:00',
      reminderSet: true
    }
  ];
  
  export { initialEvents };
  export default initialEvents;
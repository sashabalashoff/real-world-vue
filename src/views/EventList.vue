<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventService from '@/services/EventService';
import EventCard from '@/components/EventCard.vue';

export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
    };
  },
  async created() {
    try {
      const { data } = await EventService.getEvents();
      this.events = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

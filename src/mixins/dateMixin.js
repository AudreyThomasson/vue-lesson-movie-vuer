export const dateMixin = {
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            const options = {day: 'numeric', year: 'numeric', month: 'long'};
            return new Intl.DateTimeFormat('en-US', options).format(date);
        }
    }
};
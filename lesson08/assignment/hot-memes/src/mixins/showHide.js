// Mixin to toggle image border
export const showHide = {
    data() {
        return {
            isHidden: false,
        };
    },
    methods: {
        toggleShowHide() {
            this.isHidden = !this.isHidden;
        },
    },
};
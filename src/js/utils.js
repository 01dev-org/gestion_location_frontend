
// Format number with commas
const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Convert string to title case
const toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
};

// Get random number between min and max
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Check if string is valid email
const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// Truncate text with ellipsis
const truncateText = (str, num) => {
    if (str.length <= num) return str;
    return str.slice(0, num) + '...';
};

// Debounce function
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Get URL parameters as object
const getUrlParams = () => {
    return Object.fromEntries(
        new URLSearchParams(window.location.search).entries()
    );
};

// Deep clone object
const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

export default function getRelativeTime(timestamp: number) {
    const epoch = parseInt(timestamp.toString());
    const difference = Date.now() / 1000 - epoch;

    if (difference < 60) {
        return `${Math.floor(difference)} seconds ago`;
    } else if (difference < 3600) {
        return `${Math.floor(difference / 60)} minutes ago`;
    } else if (difference < 86400) {
        return `${Math.floor(difference / 3600)} hours ago`;
    } else if (difference >= 604800 && difference < 5256000) {
        return `${Math.floor(difference / 86400)} weeks ago`;
    } else {
        return `${Math.floor(difference / 5256000)} months ago`;
    }
}

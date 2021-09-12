const url = window.location.toString();
if (!url.startsWith("https://classroom.google.com/u/1")) {
    const new_url = url.replace('https://classroom.google.com/u/0', 'https://classroom.google.com/u/1');
    window.location.href = new_url;
}
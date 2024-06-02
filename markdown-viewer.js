document.addEventListener('DOMContentLoaded', () => {
    const contentElement = document.getElementById('content');

    // Function to fetch and display the markdown file
    async function fetchMarkdown() {
        try {
            const response = await fetch('lo-trinh.md'); // Replace with the path to your markdown file
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const markdown = await response.text();
            const htmlContent = marked(markdown);
            contentElement.innerHTML = htmlContent;
        } catch (error) {
            console.error('Error fetching the markdown file:', error);
            contentElement.innerHTML = `<div class="alert alert-danger">Error loading content</div>`;
        }
    }

    fetchMarkdown();
});

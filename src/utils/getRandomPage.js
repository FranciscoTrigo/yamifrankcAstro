// src/utils/getRandomPage.js
export const getRandomPage = () => {
    // Add your list of pages here
    const pages = [
      '/about',
      '/links',
      '/now',
      '/music/strandberg',
    ];
    
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * pages.length);
  
    // Return the random page
    return pages[randomIndex];
  };
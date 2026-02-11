const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000,

};
ScrollReveal().reveal("nav",{
    ...scrollRevealOption,
    origin:"top",
});
ScrollReveal().reveal(".header-image",{
    ...scrollRevealOption,
    origin:"right",
    delay:500,
});
ScrollReveal().reveal(".header-content h1",{
    ...scrollRevealOption,
    
    delay:1000,
});
ScrollReveal().reveal(".header-content p",{
    ...scrollRevealOption,
    
    delay:1500,
});
ScrollReveal().reveal(".header-content form",{
    ...scrollRevealOption,
     origin: "bottom", 
     delay:2000,

  
});
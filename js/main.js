import { menu } from "./modules/menu.js";
import { social } from "./modules/social.js";
import { head } from "./modules/head.js";
import { loader } from "./modules/loader.js";
import { insertNavBar } from "./modules/nav.js";
import { setupModal } from "./modules/modal.js";
import { renderDetailedProjects, renderSimpleProjects} from './modules/projects.js';

document.addEventListener("DOMContentLoaded", async () => {
    await loader(); 
    await head();
    await menu(); 

    if (document.querySelector('.projects__grid')) {
      renderSimpleProjects();
    }

    if (document.querySelector('#footer-container')) {
      social();    
    }
  
    if (document.querySelector('.projectss__items')) {
      renderDetailedProjects();
    }

    if (document.querySelector('.modal__close-x')) {
      setupModal();    
    }
  
    if (document.querySelector('#nav-bar')) {
      const menuItems = [
        { id: "about", icon: "fas fa-user", text: "" },
        { id: "future", icon: "fas fa-bullseye", text: "" },
        { id: "services", icon: "fas fa-cogs", text: "" },
        { id: "tech_stack", icon: "fas fa-laptop-code", text: "" },
        { id: "projects", icon: "fas fa-tasks", text: "" },
    ];
    
    insertNavBar(menuItems, "nav-bar");
    }

function getBackgroundColor(element) {
    const bgColor = window.getComputedStyle(element).backgroundColor;
    
    const rgbToHsl = (rgb) => {
      const result = rgb.match(/\d+/g);
      let r = result[0] / 255;
      let g = result[1] / 255;
      let b = result[2] / 255;
      
      let max = Math.max(r, g, b);
      let min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
      
      if (max === min) {
        h = s = 0; 
      } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === r) {
          h = (g - b) / d + (g < b ? 6 : 0);
        } else if (max === g) {
          h = (b - r) / d + 2;
        } else {
          h = (r - g) / d + 4;
        }
        h /= 6;
      }
  
      return { h: h * 360, s: s * 100, l: l * 100 };
    };
  
    const hsl = rgbToHsl(bgColor);
    return hsl.l; 
  }
  
  function adjustNavbarTextColor() {
    const navbar = document.querySelector('.navbar-fixed');
    
    if (!navbar) return; 
    
    const sections = document.querySelectorAll('section');
    let navbarPosition = navbar.getBoundingClientRect();
    
    sections.forEach(section => {
      let sectionPosition = section.getBoundingClientRect();
      if (sectionPosition.top <= navbarPosition.bottom && sectionPosition.bottom >= navbarPosition.top) {
        const sectionBgColor = window.getComputedStyle(section).backgroundColor;
        const luminosity = getBackgroundColor(sectionBgColor);
        
        if (luminosity < 50) {
          navbar.querySelector('.navbar-text').style.color = 'white';
        } else {
          navbar.querySelector('.navbar-text').style.color = 'black';
        }
      }
    });
  }
  
  window.addEventListener('scroll', adjustNavbarTextColor);
  
  document.addEventListener('DOMContentLoaded', adjustNavbarTextColor);
  
});
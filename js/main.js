// Main Application JavaScript Logic for Emergency Electricals

// Fallback Image Handler to prevent any broken images
function handleImageError(img) {
  img.onerror = null;
  img.src = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=85";
}

// Render Service Cards into Grid
function renderServices(filter = 'all') {
  const grid = document.getElementById("serviceGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = filter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === filter);

  filtered.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.onclick = () => openServiceSlidePanel(service.id);

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${service.image}" alt="${service.title}" loading="lazy" onerror="handleImageError(this)" />
        <span class="card-category-badge">${service.categoryName}</span>
      </div>
      <div class="service-info">
        <div>
          <h3>${service.title}</h3>
          <p>${service.snippet}</p>
        </div>
        <div class="card-footer-action">
          <span>View Specs & Book</span>
          <div class="arrow-icon">
            <svg style="width:16px; height:16px; fill:currentColor;"><use href="#icon-arrow"/></svg>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Filter Services by Tab Category
function filterServices(category, event) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  if (event && event.target) {
    event.target.classList.add("active");
  }
  renderServices(category);
}

// Open Right Slide-Over Detail Panel
function openServiceSlidePanel(id) {
  const service = servicesData.find(s => s.id === id);
  if (!service) return;

  const panelImg = document.getElementById("panelImage");
  panelImg.src = service.image;
  panelImg.onerror = function() { handleImageError(this); };

  document.getElementById("panelTitle").textContent = service.title;
  document.getElementById("panelCategory").textContent = service.categoryName;
  document.getElementById("panelDescription").textContent = service.description;

  const encodedText = encodeURIComponent(`Hi Emergency Electricals, I am interested in ${service.title} service in Electronic City.`);
  document.getElementById("panelWhatsappBtn").href = `https://wa.me/916302688718?text=${encodedText}`;

  document.getElementById("servicePanelBackdrop").classList.add("active");
  document.getElementById("serviceSlidePanel").classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background body scrolling
}

// Close Right Slide-Over Detail Panel
function closeServiceSlidePanel() {
  document.getElementById("servicePanelBackdrop").classList.remove("active");
  document.getElementById("serviceSlidePanel").classList.remove("active");
  document.body.style.overflow = "auto";
}

function closePanelOnBackdrop(e) {
  if (e.target.id === "servicePanelBackdrop") {
    closeServiceSlidePanel();
  }
}

// Sidebar Drawer Navigation Functions
function toggleSidebar() {
  document.getElementById("sidebarOverlay").classList.toggle("active");
  document.getElementById("sidebarDrawer").classList.toggle("active");
}

function closeSidebar() {
  document.getElementById("sidebarOverlay").classList.remove("active");
  document.getElementById("sidebarDrawer").classList.remove("active");
}

// Close panels on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeServiceSlidePanel();
    closeSidebar();
  }
});

// Initialize application on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderServices('all');
});

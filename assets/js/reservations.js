document.addEventListener("DOMContentLoaded", () => {

  // -------------------- RESERVATIONS --------------------
  const reservationsData = [
    {
      name: "Michael Chen",
      date: "2022-01-01",
      time: "10:00 PM",
      status: "confirmed",
      guests: "12",
      reservationsArea: "VIP 1",
      bookingAmount: "$2,000",
    },
    {
      name: "Sarah Jenkins",
      date: "2022-01-01",
      time: "10:00 PM",
      status: "arrived",
      guests: "18",
      reservationsArea: "VIP 3",
      bookingAmount: "$3,500",
    },
    {
      name: "David Rodriguez",
      date: "2022-01-01",
      time: "10:00 PM",
      status: "pending",
      guests: "6",
      reservationsArea: "Booth 2",
      bookingAmount: "$1,000",
    },
  ];

  const reservationsList = document.getElementById(
    "recent-reservations-list",
  );
  const statusFilter = document.getElementById("statusFilter");
  const searchInput = document.getElementById("searchReservations");

  function renderReservations(data = reservationsData) {
    if (!reservationsList) return;

    if (data.length === 0) {
      reservationsList.innerHTML = `
        <div class="reservations-table-row" style="display: flex; justify-content: center; border-bottom: none; cursor: default;">
          <div class="reservations-table-cell" style="text-align: center; color: var(--color-text-muted); padding: 30px;">
            No reservations found.
          </div>
        </div>
      `;
      return;
    }

    reservationsList.innerHTML = data
      .map((res) => {
        return `
        <div class="reservations-table-row">
          <div class="guest-info d-flex flex-column align-items-start gap-1">
            <span class="guest-name">${res.name}</span>
            <span class="reservation-from">Reserve From</span>
          </div>
          <div class="reservations-table-cell">${res.date}<br>${res.time}
          </div>
          <div class="status-cell">
            <span class="status-pill status-${res.status.toLowerCase()}">
              ${res.status}
            </span>
          </div>
          <div class="reservations-table-cell">${res.guests} Guests</div>
          <div class="reservations-table-cell">${res.reservationsArea}</div>
          <div class="reservations-table-cell">${res.bookingAmount}</div>
          <div class="dashboard-table-cell">
            <button class="btn-action ms-auto" onclick="event.stopPropagation()">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          
        </div>
      `;
      })
      .join("");
  }

  function handleFilters() {
    const statusValue = statusFilter.value.toLowerCase();
    const searchValue = searchInput.value.toLowerCase();

    const filteredData = reservationsData.filter((res) => {
      const matchesStatus = statusValue === "" || res.status.toLowerCase() === statusValue;
      const matchesSearch = res.name.toLowerCase().includes(searchValue) || 
                           res.reservationsArea.toLowerCase().includes(searchValue);
      return matchesStatus && matchesSearch;
    });

    renderReservations(filteredData);
  }

  // Event Listeners
  if (statusFilter) {
    statusFilter.addEventListener("change", handleFilters);
  }

  if (searchInput) {
    searchInput.addEventListener("input", handleFilters);
  }

  // Initial render
  renderReservations();
});
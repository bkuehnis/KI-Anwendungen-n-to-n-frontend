<script>
  import "./styles.css";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">KI-Anwendung Demo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/appartment">Appartment Regression</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/mnist">Number Classification</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<div class="container mt-3">
  <slot />
</div>

(function () {
  const AUTH_KEY = "glemo_data_room_v5_access";

  function readAccess(storage) {
    try {
      const access = JSON.parse(storage.getItem(AUTH_KEY) || "null");
      if (
        access &&
        access.authorized === true &&
        Number(access.expiresAt) > Date.now()
      ) {
        return access;
      }
      storage.removeItem(AUTH_KEY);
    } catch (e) {
      storage.removeItem(AUTH_KEY);
    }
    return null;
  }

  function currentAccess() {
    return readAccess(sessionStorage) || readAccess(localStorage);
  }

  // If on login page, don't redirect
  if (window.location.pathname.endsWith('login.html')) {
    return;
  }

  if (!currentAccess()) {
    const pathname = window.location.pathname;
    const filename = pathname.split('/').pop() || 'index.html';
    const folder = pathname.includes('/wireframe_package/')
      ? 'wireframe_package/'
      : pathname.includes('/html/')
        ? 'html/'
        : '';
    const target = folder + filename + window.location.search + window.location.hash;
    const base = folder ? '../login.html' : 'login.html';
    window.location.replace(base + '?next=' + encodeURIComponent(target));
    return;
  }

  document.documentElement.classList.add("glemo-auth-ready");
})();

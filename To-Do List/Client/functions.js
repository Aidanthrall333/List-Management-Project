function showLoading() {
    result.innerHTML = "Loading...";
  }
  
  async function main() {
    addButton.disabled = true;
    delButton.disabled = true;
    showLoading();
  
    await GetList();
  
    addButton.disabled = false;
    delButton.disabled = false;
  }
  main();
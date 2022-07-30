const menuSelection = document.querySelector('select');
const deploymentContainer = document.getElementById('opt-deploy-container')

menuSelection.addEventListener('change', deployGridBySelection());

function cleanGrid() {
    deploymentContainer.innerHTML = "";
    deployGridBySelection();
}

function deployGridBySelection() {
    const gridAmount = menuSelection.value;
    for (let i = 0; i < gridAmount; i++){
        console.log(i)
        const newDiv = document.createElement('div');
    }
    deploymentContainer.appendChild(newDiv);
}
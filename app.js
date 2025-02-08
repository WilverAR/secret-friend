class SecretFriend {
    constructor() {
        this.friends = new Set();
        this.initEventListeners();
    }

    initEventListeners() {
        document.getElementById("btnAdd").addEventListener("click", () => this.addFriend());
        document.getElementById("btnDraw").addEventListener("click", () => this.drawFriend());
        document.getElementById("btnViewList").addEventListener("click", () => this.showList());
        document.getElementById("btnCloseModal").addEventListener("click", () => this.closeModal());
    }

    addFriend() {
        const input = document.getElementById("friend");
        const name = input.value.trim();

        if (name.length < 3) {
            alert("Please enter a valid name, minimum 3 characters.");
            return;
        }
        if (this.friends.has(name)) {
            alert("This name has already been added.");
            return;
        }
        this.friends.add(name);
        input.value = "";
        alert(`✅ ${name} has been added.`);
    }

    showList() {
        const listElement = document.getElementById("friendList");
        listElement.innerHTML = "";

        if (this.friends.size === 0) {
            listElement.innerHTML = "<li>⚠️ There are no friends in the list.</li>";
        } else {
            this.friends.forEach(name => {
                const li = document.createElement("li");
                li.textContent = name;
                listElement.appendChild(li);
            });
        }
        document.getElementById("modalList").showModal();
    }

    closeModal() {
        document.getElementById("modalList").close();
    }

    drawFriend() {
        if (this.friends.size === 0) {
            alert("There are no names in the list to draw.");
            return;
        }
        const friendsArray = Array.from(this.friends);
        const randomIndex = Math.floor(Math.random() * friendsArray.length);
        const drawnName = friendsArray[randomIndex];

        document.getElementById("result").innerHTML = `🎉 The secret friend is: <strong>${drawnName}</strong> 🎉`;
    }
}
new SecretFriend();

class Post {
    constructor(content, imageUrl, date) {
        this.content = content;
        this.imageUrl = imageUrl;
        this.date = date; // ręczna data, bez godziny
    }
}

class Blog {
    constructor(postsData) {
        this.postsContainer = document.getElementById("posts");
        this.posts = postsData.map(p => new Post(p.content, p.imageUrl, p.date));
        this.renderPosts();
    }

    renderPosts() {
        this.postsContainer.innerHTML = "";
        this.posts.forEach(post => {
            const div = document.createElement("div");
            div.className = "post";
            div.innerHTML = `
                <p>${post.content}</p>
                ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Zdjęcie wydarzenia">` : ""}
                <small>${post.date}</small>
            `;
            this.postsContainer.appendChild(div);
        });
    }
}

// 🔥 TU WPISUJESZ SWOJE 10 ZDJĘĆ + OPISY + DATY (bez godzin)
const postsData = [
    { content: "Opis wydarzenia 1", imageUrl: "link_do_zdjecia_1.jpg", date: "01.09.2026" },
    { content: "Opis wydarzenia 2", imageUrl: "link_do_zdjecia_2.jpg", date: "02.09.2026" },
    { content: "Opis wydarzenia 3", imageUrl: "link_do_zdjecia_3.jpg", date: "03.09.2026" },
    { content: "Opis wydarzenia 4", imageUrl: "link_do_zdjecia_4.jpg", date: "04.09.2026" },
    { content: "Opis wydarzenia 5", imageUrl: "link_do_zdjecia_5.jpg", date: "05.09.2026" },
    { content: "Opis wydarzenia 6", imageUrl: "link_do_zdjecia_6.jpg", date: "06.09.2026" },
    { content: "Opis wydarzenia 7", imageUrl: "link_do_zdjecia_7.jpg", date: "07.09.2026" },
    { content: "Opis wydarzenia 8", imageUrl: "link_do_zdjecia_8.jpg", date: "08.09.2026" },
    { content: "Opis wydarzenia 9", imageUrl: "link_do_zdjecia_9.jpg", date: "09.09.2026" },
    { content: "Opis wydarzenia 10", imageUrl: "link_do_zdjecia_10.jpg", date: "10.09.2026" }
];

new Blog(postsData);
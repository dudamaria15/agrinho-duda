function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showProductDetails(product) {
    let message = "";

    switch(product) {
        case 'milho':
            message = "Milho fresco, cultivado sem pesticidas, diretamente da fazenda para sua mesa.";
            break;
        case 'soja':
            message = "Soja orgânica de alta qualidade, perfeita para uma alimentação saudável e sustentável.";
            break;
        case 'trigo':
            message = "Trigo integral, ideal para sua padaria ou cozinha. Rico em nutrientes e sabor.";
            break;
    }

    alert(message);
}

// Enviar formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    document.getElementById('contactForm').reset();
});

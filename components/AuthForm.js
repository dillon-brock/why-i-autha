

export default function createAuthForm(form, { handleAuth }) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        // *** make form data and call handleAuth with email and password
        handleAuth(formData.get('email'), formData.get('password'));
    });

    return () => { };
}
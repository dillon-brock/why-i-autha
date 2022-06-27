const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    // *** return supabase user
    return client.auth.session() && client.auth.session().user;
}

export async function signUp(email, password) {
    // *** implement supabase sign up
    return client.auth.signUp({ email, password });
}

export async function signIn(email, password) {
    // *** implement supabase sign in
    return client.auth.signIn({ email, password });
}

export async function signOut() {
    // *** implement supabase sign out
    return client.auth.signOut();
}

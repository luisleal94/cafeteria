import supabase from './client';

/**
 * Function to sign in a user with email and password using Supabase authentication.
 * @param email 
 * @param pwd 
 * @returns 
 */
export const signInWithEmail = async (email: string, pwd: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: pwd,
    })
    
    if (error) {
        console.error('Error signing in:', error.message);
        return { success: false, error: error.message, data: null };
    }
    
    console.log('Sign-in data:', data);
    return { success: true, error: null, data };
};

/**
 * Fnction to sign out the current user using Supabase authentication.
 * @returns 
 */
export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('Error signing out:', error.message);
        return { success: false, error: error.message };
    }
    return { success: true, error: null };
};
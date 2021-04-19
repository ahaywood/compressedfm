import { useUser, withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import CustomError from 'pages/customError';
import client from 'utils/client';
import { guestQuery } from 'utils/queries';

export default function guest({ guest }) {
    const { user, error, isLoading } = useUser();

    if (!guest) {
        return (
            <CustomError
                status={403}
                text="You don't have access to this page"
            />
        );
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    return <div>Hello {user.nickname}</div>;
}

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps({ req, res }) {
        const { user } = getSession(req, res);
        const { email } = user;
        const guest = await client.fetch(guestQuery, { email });
        return { props: { guest, user } };
    },
});

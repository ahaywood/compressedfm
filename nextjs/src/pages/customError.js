import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';

export default function CustomError({
    text = 'Something went wrong',
    status = 500,
}) {
    return (
        <InteriorLayout>
            <h1>
                {status} - {text}
            </h1>
        </InteriorLayout>
    );
}

const UserTable = () => {
    const people = [
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member'
        },
        {
            name: 'Ethan James',
            title: 'Back-end Developer',
            email: 'ethan.james@example.com',
            role: 'Admin'
        },
        {
            name: 'Ava Robinson',
            title: 'Full-stack Developer',
            email: 'ava.robinson@example.com',
            role: 'Member'
        },
        {
            name: 'Mason Lee',
            title: 'DevOps Engineer',
            email: 'mason.lee@example.com',
            role: 'Admin'
        },
        {
            name: 'Natalie Green',
            title: 'Product Manager',
            email: 'natalie.green@example.com',
            role: 'Member'
        },
        {
            name: 'Oliver Clark',
            title: 'Data Scientist',
            email: 'oliver.clark@example.com',
            role: 'Member'
        },
        {
            name: 'Isabella Turner',
            title: 'UX Designer',
            email: 'isabella.turner@example.com',
            role: 'Member'
        },
        {
            name: 'Liam Baker',
            title: 'Software Engineer',
            email: 'liam.baker@example.com',
            role: 'Admin'
        },
        {
            name: 'Emma King',
            title: 'Product Designer',
            email: 'emma.king@example.com',
            role: 'Member'
        },
        {
            name: 'Noah Davis',
            title: 'DevOps Manager',
            email: 'noah.davis@example.com',
            role: 'Admin'
        },
        {
            name: 'Aria Martin',
            title: 'QA Engineer',
            email: 'aria.martin@example.com',
            role: 'Member'
        },
        {
            name: 'William Wilson',
            title: 'Mobile Developer',
            email: 'william.wilson@example.com',
            role: 'Admin'
        },
        {
            name: 'Sophia Hall',
            title: 'Full-stack Engineer',
            email: 'sophia.hall@example.com',
            role: 'Member'
        },
        {
            name: 'Michael Adams',
            title: 'Database Administrator',
            email: 'michael.adams@example.com',
            role: 'Admin'
        },
        {
            name: 'Olivia Taylor',
            title: 'Systems Analyst',
            email: 'olivia.taylor@example.com',
            role: 'Member'
        }
    ];

    return (
        <div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg font-jakarta">
            <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-6">
                            Name
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-700 lg:table-cell">
                            Title
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-700 sm:table-cell">
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-700">
                            Role
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                        <tr key={person.email}>
                            <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                {person.name}
                                <dl className="font-normal lg:hidden">
                                    <dt className="sr-only">Title</dt>
                                    <dd className="mt-1 truncate text-gray-700">{person.title}</dd>
                                    <dt className="sr-only sm:hidden">Email</dt>
                                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                                        {person.email}
                                    </dd>
                                </dl>
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                                {person.title}
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                {person.email}
                            </td>
                            <td className="px-3 py-4 text-sm text-gray-500">{person.role}</td>
                            <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Edit<span className="sr-only">, {person.name}</span>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;

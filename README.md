# Tasklist App using Next.js, Tailwind CSS, and TypeScript

This project is a personal web application that allows you to manage a tasklist for household chores. The app is built using Next.js, styled with Tailwind CSS, and written in TypeScript. The task data is stored in a PostgreSQL database hosted on Vercel.

## Features

- User-friendly interface for adding, editing, and deleting tasks.
- Updates for task completion status.

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 14 or higher)
- PostgreSQL database
- Vercel account (for hosting the app and database)

## Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/your-username/your-repo.git
```

2. Navigate to the project directory:

```
cd your-repo
```

3. Install the dependencies:

```
npm install
```

4. Set up your PostgreSQL database:

   - Create a new database on your PostgreSQL server.
   - Update the database connection details in the `.env` file.

5. Deploy the app to Vercel:

```
vercel
```

6. Follow the prompts to connect the app to your Vercel account.

## Configuration

The following environment variables need to be configured in the `.env` file:

```
DATABASE_HOST=<your-database-host>
DATABASE_NAME=<your-database-name>
DATABASE_USERNAME=<your-database-username>
DATABASE_PASSWORD=<your-database-password>
```

## Usage

Once the app is deployed and running, you can access it in your web browser. Start managing your personal tasklist for household chores.

## Contributing

Contributions to this project are not accepted as this is a personal application.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/) - React framework for building the app.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [PostgreSQL](https://www.postgresql.org/) - Open-source relational database management system.
- [Vercel](https://vercel.com/) - Cloud platform for hosting and deploying web applications.

## Contact

If you have any questions or suggestions regarding this project, feel free to create an issue or pull request.

Happy task managing!
import database from '../../database';

export default function truncate(): Promise<unknown[]> {
  return database.connection.truncate();
}

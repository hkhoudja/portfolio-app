import { useGetProjects } from "@/hooks/useGetProjects";
import { PROJECT_COLUMNS } from "@/utils";
import { Alert, Button, Card, Table } from "antd";
import Head from "next/head";

export default function Projects() {
  const { data, loading, refetch, error } = useGetProjects();
  const dataSource = data.map((project) => ({ ...project, key: project.id }));
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Portfolio app projects page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="content-layout">
        <Card
          title={"Projects"}
          style={{ margin: 16 }}
          extra={<Button onClick={refetch}>Refetch</Button>}
        >
          <Table
            loading={loading}
            columns={PROJECT_COLUMNS}
            dataSource={dataSource}
          />
          {error && (
            <Alert
              message={error.name}
              description={error.message}
              type="error"
            />
          )}
        </Card>
      </main>
    </>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';

export default function DashboardPage() {
  return (
    <div className="container-lg py-8">
      <div className="mb-8">
        <h1 className="h2 mb-2">Dashboard</h1>
        <p className="body-lg text-slate-600 dark:text-slate-400">
          Welcome to your HH Connect dashboard
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Profile Views', value: '1,234' },
          { label: 'Applications', value: '12' },
          { label: 'Messages', value: '5' },
          { label: 'Saved Jobs', value: '23' },
        ].map((stat, i) => (
          <Card key={i}>
            <CardHeader className="pb-3">
              <CardDescription>{stat.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              No recent activity
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <button className="w-full text-left p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
              📝 Update Profile
            </button>
            <button className="w-full text-left p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
              💼 Browse Jobs
            </button>
            <button className="w-full text-left p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
              📤 Upload Resume
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  BarChart3,
  TrendingUp,
  Package,
  RefreshCw,
  DollarSign,
  Users,
} from 'lucide-react';
import { Container, Section, SectionHeader, Badge } from '@/components/ui';
import { cn } from '@/lib/utils';

const mockData = {
  totalItems: 12847,
  soldToday: 47,
  revenue: 2340,
  syncStatus: 'Live',
  pendingOrders: 12,
  topGenres: [
    { name: 'Jazz', percentage: 34 },
    { name: 'Rock', percentage: 28 },
    { name: 'Electronic', percentage: 22 },
    { name: 'Soul', percentage: 16 },
  ],
  recentActivity: [
    { type: 'sale', item: 'Miles Davis - Kind of Blue', price: 45, time: '2 min' },
    { type: 'sync', item: 'Discogs Import abgeschlossen', count: 23, time: '5 min' },
    { type: 'sale', item: 'Kraftwerk - Autobahn', price: 65, time: '12 min' },
    { type: 'restock', item: 'Daft Punk - Discovery', count: 3, time: '1 std' },
  ],
};

export function DashboardPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="dashboard" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] opacity-10"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.2) 0%, transparent 60%)',
          }}
        />
      </div>

      <Container>
        <SectionHeader
          title="Ihr Laden, live in Bewegung"
          subtitle="Erleben Sie, wie Q-Records Ihren gesamten Bestand in Echtzeit orchestriert. Jeder Verkauf, jede Synchronisation, jede Bestandsänderung – sofort sichtbar."
        />

        {/* Dashboard Mock */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Browser chrome effect */}
          <div className="rounded-2xl overflow-hidden border border-off-white/10 bg-deep-charcoal shadow-2xl">
            {/* Browser header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-off-white/5 bg-vinyl-black/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="max-w-md mx-auto bg-vinyl-black/50 rounded-lg px-4 py-1.5 text-xs text-warm-gray flex items-center gap-2">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  app.q-records.de/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-4 md:p-6 lg:p-8">
              {/* Top stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <StatCard
                  icon={<Package className="w-5 h-5" />}
                  label="Gesamtbestand"
                  value={mockData.totalItems.toLocaleString('de-DE')}
                  trend="+127 diese Woche"
                  delay={0.1}
                  isInView={isInView}
                />
                <StatCard
                  icon={<DollarSign className="w-5 h-5" />}
                  label="Umsatz heute"
                  value={`€${mockData.revenue.toLocaleString('de-DE')}`}
                  trend="+12% vs. gestern"
                  positive
                  delay={0.2}
                  isInView={isInView}
                />
                <StatCard
                  icon={<TrendingUp className="w-5 h-5" />}
                  label="Verkäufe heute"
                  value={mockData.soldToday.toString()}
                  trend="Ø 42/Tag"
                  positive
                  delay={0.3}
                  isInView={isInView}
                />
                <StatCard
                  icon={<RefreshCw className="w-5 h-5" />}
                  label="Sync Status"
                  value={mockData.syncStatus}
                  trend="Letzte: vor 2 Min"
                  delay={0.4}
                  isInView={isInView}
                  live
                />
              </div>

              {/* Main content grid */}
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {/* Genre distribution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="card-3d p-4 md:col-span-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-off-white">Top Genres</h4>
                    <BarChart3 className="w-4 h-4 text-warm-gray" />
                  </div>
                  <div className="space-y-3">
                    {mockData.topGenres.map((genre, index) => (
                      <div key={genre.name}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-warm-gray">{genre.name}</span>
                          <span className="text-off-white">{genre.percentage}%</span>
                        </div>
                        <div className="h-2 bg-vinyl-black rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${genre.percentage}%` } : {}}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-gold to-gold-muted rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Recent activity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="card-3d p-4 md:col-span-2"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-off-white">Live Aktivität</h4>
                    <Badge variant="success" className="text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse" />
                      Live
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    {mockData.recentActivity.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-center gap-3 p-2 rounded-lg bg-vinyl-black/30"
                      >
                        <ActivityIcon type={activity.type} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-off-white truncate">{activity.item}</p>
                          <p className="text-xs text-warm-gray">vor {activity.time}</p>
                        </div>
                        {activity.price && (
                          <span className="text-sm font-medium text-gold">
                            €{activity.price}
                          </span>
                        )}
                        {activity.count && (
                          <span className="text-sm text-warm-gray">
                            +{activity.count}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Reflection effect */}
          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-20 blur-xl opacity-20"
            style={{
              background:
                'linear-gradient(180deg, rgba(212, 175, 55, 0.3) 0%, transparent 100%)',
            }}
          />
        </motion.div>
      </Container>
    </Section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  positive?: boolean;
  live?: boolean;
  delay: number;
  isInView: boolean;
}

function StatCard({
  icon,
  label,
  value,
  trend,
  positive,
  live,
  delay,
  isInView,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="card-3d p-4"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="text-warm-gray">{icon}</div>
        <span className="text-xs text-warm-gray">{label}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-serif font-bold text-off-white">{value}</span>
        {live && (
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        )}
      </div>
      <p
        className={cn(
          'text-xs mt-1',
          positive ? 'text-green-400' : 'text-warm-gray'
        )}
      >
        {trend}
      </p>
    </motion.div>
  );
}

function ActivityIcon({ type }: { type: string }) {
  const iconClasses = 'w-8 h-8 rounded-lg flex items-center justify-center';

  switch (type) {
    case 'sale':
      return (
        <div className={cn(iconClasses, 'bg-green-500/10 text-green-400')}>
          <DollarSign className="w-4 h-4" />
        </div>
      );
    case 'sync':
      return (
        <div className={cn(iconClasses, 'bg-blue-500/10 text-blue-400')}>
          <RefreshCw className="w-4 h-4" />
        </div>
      );
    case 'restock':
      return (
        <div className={cn(iconClasses, 'bg-gold/10 text-gold')}>
          <Package className="w-4 h-4" />
        </div>
      );
    default:
      return (
        <div className={cn(iconClasses, 'bg-warm-gray/10 text-warm-gray')}>
          <Users className="w-4 h-4" />
        </div>
      );
  }
}

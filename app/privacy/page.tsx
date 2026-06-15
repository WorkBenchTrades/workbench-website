import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator, Alert, ScrollView, StyleSheet,
  Text, TouchableOpacity, View
} from 'react-native';
import { supabase } from '../lib/supabase';
import { Toast, useToast } from '../lib/toast';

export default function PrivacySettingsScreen() {
  const router = useRouter();
  const { toast, showToast } = useToast();
  const [deleting, setDeleting] = useState(false);
  const [exporting, setExporting] = useState(false);

  async function handleExportData() {
    setExporting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const [jobs, tasks, checkins, costs, variations, profile] = await Promise.all([
        supabase.from('jobs').select('*').eq('user_id', user.id),
        supabase.from('tasks').select('*').eq('user_id', user.id),
        supabase.from('checkins').select('*').eq('user_id', user.id),
        supabase.from('job_costs').select('*').eq('user_id', user.id),
        supabase.from('job_variations').select('*').eq('user_id', user.id),
        supabase.from('profiles').select('*').eq('id', user.id).single(),
      ]);

      const exportData = {
        exported_at: new Date().toISOString(),
        user_email: user.email,
        profile: profile.data,
        jobs: jobs.data,
        tasks: tasks.data,
        checkins: checkins.data,
        costs: costs.data,
        variations: variations.data,
      };

      showToast('Data export ready — email sent to ' + user.email, 'success');
      console.log('Export data:', JSON.stringify(exportData, null, 2));
    } catch (err) {
      showToast('Export failed — please email hello@workbenchtrades.co.uk', 'error');
    }
    setExporting(false);
  }

  async function handleDeleteAccount() {
    Alert.alert(
      'Delete Account',
      'This will permanently delete your account and all data. This cannot be undone.\n\nAre you absolutely sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete My Account',
          style: 'destructive',
          onPress: async () => {
            Alert.alert(
              'Final Confirmation',
              'Type DELETE to confirm account deletion.',
              [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Yes, Delete Everything',
                  style: 'destructive',
                  onPress: async () => {
                    setDeleting(true);
                    try {
                      const { data: { user } } = await supabase.auth.getUser();
                      if (!user) return;

                      await supabase.from('job_phases').delete().eq('user_id', user.id);
                      await supabase.from('job_costs').delete().eq('user_id', user.id);
                      await supabase.from('job_variations').delete().eq('user_id', user.id);
                      await supabase.from('job_messages').delete().eq('user_id', user.id);
                      await supabase.from('checkins').delete().eq('user_id', user.id);
                      await supabase.from('tasks').delete().eq('user_id', user.id);
                      await supabase.from('jobs').delete().eq('user_id', user.id);
                      await supabase.from('xero_connections').delete().eq('user_id', user.id);
                      await supabase.from('profiles').delete().eq('id', user.id);
                      await supabase.auth.signOut();
                      router.replace('/auth');
                    } catch (err) {
                      showToast('Deletion failed — please email hello@workbenchtrades.co.uk', 'error');
                      setDeleting(false);
                    }
                  }
                }
              ]
            );
          }
        }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Privacy & Data</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>🔒</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.infoTitle}>Your data is yours</Text>
            <Text style={styles.infoText}>WorkBench stores your data securely in the EU. We never sell or share your data. You can export or delete it at any time.</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>DATA RIGHTS</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.row} onPress={handleExportData} disabled={exporting}>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>Export My Data</Text>
              <Text style={styles.rowSub}>Download all your WorkBench data as JSON</Text>
            </View>
            {exporting ? <ActivityIndicator color="#f97316" /> : <Text style={styles.rowArrow}>→</Text>}
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.row} onPress={() => showToast('Email hello@workbenchtrades.co.uk to request a correction', 'info')}>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>Correct My Data</Text>
              <Text style={styles.rowSub}>Request correction of inaccurate data</Text>
            </View>
            <Text style={styles.rowArrow}>→</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.row} onPress={() => showToast('Email hello@workbenchtrades.co.uk to restrict processing', 'info')}>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>Restrict Processing</Text>
              <Text style={styles.rowSub}>Limit how we use your data</Text>
            </View>
            <Text style={styles.rowArrow}>→</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>LEGAL</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.row} onPress={() => showToast('Visit workbenchtrades.co.uk/privacy', 'info')}>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>Privacy Policy</Text>
              <Text style={styles.rowSub}>workbenchtrades.co.uk/privacy</Text>
            </View>
            <Text style={styles.rowArrow}>→</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.row} onPress={() => showToast('Visit workbenchtrades.co.uk/terms', 'info')}>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>Terms of Service</Text>
              <Text style={styles.rowSub}>workbenchtrades.co.uk/terms</Text>
            </View>
            <Text style={styles.rowArrow}>→</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>DATA STORED</Text>
        <View style={styles.card}>
          {[
            { label: 'Storage location', value: 'EU (Frankfurt)' },
            { label: 'Provider', value: 'Supabase' },
            { label: 'Encryption', value: 'TLS 1.2+ in transit, AES-256 at rest' },
            { label: 'AI provider', value: 'Anthropic + OpenAI (server-side only)' },
            { label: 'Payments', value: 'Stripe (we never see card details)' },
            { label: 'Advertising', value: 'None — ever' },
            { label: 'Data selling', value: 'Never' },
          ].map((item, i, arr) => (
            <View key={item.label}>
              <View style={styles.row}>
                <Text style={styles.rowSub}>{item.label}</Text>
                <Text style={styles.rowValue}>{item.value}</Text>
              </View>
              {i < arr.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>CONTACT</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>Data Protection</Text>
              <Text style={styles.rowSub}>hello@workbenchtrades.co.uk</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>ICO (UK Regulator)</Text>
              <Text style={styles.rowSub}>ico.org.uk — lodge a complaint</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 20 }} />

        <TouchableOpacity style={styles.deleteBtn} onPress={handleDeleteAccount} disabled={deleting}>
          {deleting ? (
            <ActivityIndicator color="#ef4444" />
          ) : (
            <>
              <Text style={styles.deleteBtnTitle}>Delete My Account</Text>
              <Text style={styles.deleteBtnSub}>Permanently delete all data. Cannot be undone.</Text>
            </>
          )}
        </TouchableOpacity>

        <View style={{ height: 60 }} />
      </ScrollView>

      <Toast message={toast.message} type={toast.type as any} visible={toast.visible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', paddingTop: 56 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 24, gap: 16 },
  backBtn: { backgroundColor: '#1e293b', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6 },
  backBtnText: { color: '#94a3b8', fontSize: 14 },
  title: { fontSize: 20, fontWeight: '700', color: '#f8fafc', letterSpacing: -0.3 },
  content: { flex: 1, paddingHorizontal: 20 },
  infoCard: { flexDirection: 'row', backgroundColor: '#1e293b', borderRadius: 14, padding: 16, marginBottom: 24, borderWidth: 1, borderColor: '#334155', gap: 12, alignItems: 'flex-start' },
  infoIcon: { fontSize: 24, marginTop: 2 },
  infoTitle: { fontSize: 15, fontWeight: '700', color: '#f8fafc', marginBottom: 4 },
  infoText: { fontSize: 13, color: '#64748b', lineHeight: 20 },
  sectionTitle: { fontSize: 11, fontWeight: '700', color: '#475569', letterSpacing: 0.5, marginBottom: 8, marginTop: 16, textTransform: 'uppercase' },
  card: { backgroundColor: '#1e293b', borderRadius: 14, borderWidth: 1, borderColor: '#334155', overflow: 'hidden', marginBottom: 4 },
  row: { flexDirection: 'row', alignItems: 'center', padding: 14, gap: 12 },
  rowTitle: { fontSize: 14, fontWeight: '600', color: '#f8fafc', marginBottom: 2 },
  rowSub: { fontSize: 12, color: '#64748b' },
  rowValue: { fontSize: 12, color: '#94a3b8', textAlign: 'right', flex: 1 },
  rowArrow: { color: '#475569', fontSize: 16 },
  divider: { height: 1, backgroundColor: '#334155' },
  deleteBtn: { backgroundColor: '#ef444411', borderRadius: 14, padding: 18, alignItems: 'center', borderWidth: 1, borderColor: '#ef4444' },
  deleteBtnTitle: { fontSize: 16, fontWeight: '700', color: '#ef4444', marginBottom: 4 },
  deleteBtnSub: { fontSize: 12, color: '#ef444488', textAlign: 'center' },
});
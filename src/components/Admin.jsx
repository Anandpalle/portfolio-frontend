import { useState, useEffect } from 'react';
import {
  FiInbox,
  FiMail,
  FiUser,
  FiTrash2,
  FiRefreshCw,
  FiArrowLeft,
  FiSearch,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiShield,
} from 'react-icons/fi';
import { getContacts, deleteContact } from '../services/api';

export default function Admin({ onBackToPortfolio }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [deletingId, setDeletingId] = useState(null);
  const [actionNotice, setActionNotice] = useState(null);

  const fetchContactsList = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getContacts();
      if (Array.isArray(data)) {
        // Sort newest first if id is numerical
        const sorted = [...data].sort((a, b) => (b.id || 0) - (a.id || 0));
        setContacts(sorted);
      } else {
        setContacts([]);
      }
    } catch (err) {
      console.error('Failed to fetch contacts:', err);
      setError('Unable to load contacts from backend API. Please make sure the Spring Boot service is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactsList();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm(`Are you sure you want to delete message #${id}?`)) {
      return;
    }
    setDeletingId(id);
    try {
      await deleteContact(id);
      setContacts((prev) => prev.filter((c) => c.id !== id));
      setActionNotice(`Message #${id} deleted successfully.`);
      setTimeout(() => setActionNotice(null), 3000);
    } catch (err) {
      console.error('Failed to delete contact:', err);
      alert('Failed to delete contact message. Backend may not support DELETE or is unreachable.');
    } finally {
      setDeletingId(null);
    }
  };

  const filteredContacts = contacts.filter((c) => {
    const q = searchQuery.toLowerCase();
    const nameMatch = (c.name || '').toLowerCase().includes(q);
    const emailMatch = (c.email || '').toLowerCase().includes(q);
    const subjectMatch = (c.subject || '').toLowerCase().includes(q);
    const messageMatch = (c.message || '').toLowerCase().includes(q);
    return nameMatch || emailMatch || subjectMatch || messageMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToPortfolio}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-black transition flex items-center gap-2 text-xs font-bold cursor-pointer border border-slate-300 shadow-xs"
            >
              <FiArrowLeft className="text-base text-blue-600" />
              <span>Back to Portfolio</span>
            </button>
            <div className="h-6 w-px bg-slate-300" />
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-bold">
              <FiShield />
              <span>Admin Gateway</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchContactsList}
              disabled={loading}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 transition disabled:opacity-50 cursor-pointer shadow-sm shadow-blue-500/20"
            >
              <FiRefreshCw className={`text-sm ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Inquiries</span>
            </button>
          </div>
        </div>

        {/* Title & Overview Stats */}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
              Contact Submissions Dashboard
            </h1>
            <p className="text-sm text-slate-700 mt-1 font-normal">
              Private portal to monitor and manage all inquiries submitted through your portfolio contact form.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-xs">
              <span className="text-xs font-mono uppercase text-slate-500 font-bold">Total Inquiries</span>
              <p className="text-2xl sm:text-3xl font-black font-mono text-blue-600">
                {contacts.length}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-xs">
              <span className="text-xs font-mono uppercase text-slate-500 font-bold">Matching Filter</span>
              <p className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">
                {filteredContacts.length}
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-xs">
              <span className="text-xs font-mono uppercase text-slate-500 font-bold">API Status</span>
              <p className="text-xs sm:text-sm font-bold text-emerald-700 flex items-center gap-1.5 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Spring Boot DB Connected</span>
              </p>
            </div>
          </div>
        </div>

        {/* Action Notice */}
        {actionNotice && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
            <FiCheckCircle className="text-emerald-600 shrink-0" />
            <span className="font-semibold">{actionNotice}</span>
          </div>
        )}

        {/* Search Input Bar */}
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, email, subject, or message keyword..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-300 text-black placeholder-slate-400 focus:outline-none focus:border-blue-600 text-sm font-medium transition shadow-2xs"
          />
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
            <FiAlertCircle className="text-rose-600 text-lg mt-0.5 shrink-0" />
            <div>
              <p className="font-bold">Connection Error</p>
              <p className="text-xs text-rose-700 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="p-12 text-center space-y-3 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-mono text-slate-600 font-bold">Querying contacts from Spring Boot backend...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredContacts.length === 0 && (
          <div className="p-12 text-center space-y-3 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <FiInbox className="text-4xl text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-black">No Contact Messages Found</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              {searchQuery
                ? `No submissions matched "${searchQuery}". Try clearing your search.`
                : 'There are no contact inquiries in the backend database yet. Submissions sent via the contact form will appear here.'}
            </p>
          </div>
        )}

        {/* Contacts Inquiries List */}
        {!loading && filteredContacts.length > 0 && (
          <div className="space-y-4">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all space-y-4 shadow-xs"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                      #{contact.id}
                    </span>
                    <div className="flex items-center gap-2">
                      <FiUser className="text-slate-500 text-sm" />
                      <h3 className="text-base font-black text-black">
                        {contact.name || 'Anonymous Sender'}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Reply via email button */}
                    {contact.email && (
                      <a
                        href={`mailto:${contact.email}?subject=Re: ${encodeURIComponent(contact.subject || 'Portfolio Inquiry')}`}
                        className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold flex items-center gap-1.5 transition"
                      >
                        <FiSend className="text-xs" />
                        <span>Reply Email</span>
                      </a>
                    )}
                    {/* Delete button */}
                    <button
                      onClick={() => handleDelete(contact.id)}
                      disabled={deletingId === contact.id}
                      className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold transition disabled:opacity-50 cursor-pointer"
                      title="Delete this message"
                      aria-label="Delete message"
                    >
                      <FiTrash2 className="text-sm" />
                    </button>
                  </div>
                </div>

                {/* Email & Subject */}
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-black bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <FiMail className="text-blue-600 shrink-0" />
                    <span className="font-mono font-medium truncate">{contact.email}</span>
                  </div>
                  <div className="text-black bg-slate-50 p-2.5 rounded-xl border border-slate-200 truncate">
                    <span className="text-slate-500 font-mono font-bold">Subject: </span>
                    <span className="font-bold text-black">{contact.subject || 'No Subject'}</span>
                  </div>
                </div>

                {/* Message Body */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Message Content:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-normal">
                    {contact.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

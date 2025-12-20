import { useEffect, useState } from "react";
import { Command } from "cmdk";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  Zap,
  Home,
  Briefcase,
  Layers,
  FlaskConical,
  MessageSquare,
  FileText
} from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigateTo = (path: string) => {
    setOpen(false);
    // Dispatch the custom navigation event used in App.tsx
    const event = new CustomEvent("navigate", { detail: path });
    window.dispatchEvent(event);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="w-full max-w-[640px] bg-[#0a0a0a]/90 border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center border-b border-white/10 px-4">
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <Command.Input
            placeholder="Type a command or search..."
            aria-label="Search commands"
            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 text-white"
          />
          <div className="flex items-center text-xs text-gray-500 space-x-1">
            <span className="bg-white/10 px-1.5 py-0.5 rounded">ESC</span>
          </div>
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2 scroll-py-2 custom-scrollbar">
          <Command.Empty className="py-6 text-center text-sm text-gray-500">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="text-xs font-medium text-gray-500 px-2 py-1.5 mb-2">
            <Command.Item
              onSelect={() => navigateTo("home")}
              className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
              <span className="ml-auto text-xs opacity-50 group-hover:opacity-100">Go to homepage</span>
            </Command.Item>
            <Command.Item
              onSelect={() => navigateTo("services")}
              className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
            >
              <Zap className="mr-2 h-4 w-4" />
              <span>Services</span>
            </Command.Item>
            <Command.Item
              onSelect={() => navigateTo("products")}
              className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
            >
              <Layers className="mr-2 h-4 w-4" />
              <span>Products</span>
            </Command.Item>
            <Command.Item
              onSelect={() => navigateTo("research")}
              className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
            >
              <FlaskConical className="mr-2 h-4 w-4" />
              <span>Research</span>
            </Command.Item>
            <Command.Item
              onSelect={() => navigateTo("careers")}
              className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Careers</span>
            </Command.Item>
            <Command.Item
              onSelect={() => navigateTo("contact")}
              className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </Command.Item>
          </Command.Group>

          <Command.Separator className="my-1 h-px bg-white/10" />

          <Command.Group heading="Legal" className="text-xs font-medium text-gray-500 px-2 py-1.5 mt-2 mb-2">
            <Command.Item
              onSelect={() => navigateTo("privacy")}
              className="flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>Privacy Policy</span>
            </Command.Item>
            <Command.Item
              onSelect={() => navigateTo("terms")}
              className="flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>Terms of Service</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}

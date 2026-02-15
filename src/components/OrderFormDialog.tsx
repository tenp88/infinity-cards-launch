import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface OrderFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const cardTypes = [
  "Дисконтная",
  "Топливная",
  "Банковская",
  "Клубная / Лояльности",
  "Пропуск / ID",
];

const printRuns = [
  "100–300",
  "300–500",
  "500–1000",
  "1000–5000",
  "5000+",
];

const OrderFormDialog = ({ open, onOpenChange }: OrderFormDialogProps) => {
  const [name, setName] = useState("");
  const [cardType, setCardType] = useState("");
  const [printRun, setPrintRun] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isValid = name.trim() && cardType && printRun && phone.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);

    const message = `Новая заявка с сайта:\n\nИмя: ${name}\nТип карты: ${cardType}\nТираж: ${printRun}\nТелефон: ${phone}`;
    const waUrl = `https://wa.me/996222308088?text=${encodeURIComponent(message)}`;

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      window.open(waUrl, "_blank");
      resetForm();
    }, 1500);
  };

  const resetForm = () => {
    setName("");
    setCardType("");
    setPrintRun("");
    setPhone("");
    setIsSuccess(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) resetForm(); onOpenChange(v); }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold">
            Рассчитать стоимость
          </DialogTitle>
          <DialogDescription>
            Заполните форму и мы свяжемся с вами в течение часа
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Icon name="Check" size={32} className="text-green-600" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Заявка отправлена!</p>
              <p className="text-sm text-muted-foreground mt-1">Переводим вас в WhatsApp...</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                placeholder="Как к вам обращаться?"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Тип карты</Label>
              <Select value={cardType} onValueChange={setCardType}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип карты" />
                </SelectTrigger>
                <SelectContent>
                  {cardTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Тираж</Label>
              <Select value={printRun} onValueChange={setPrintRun}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тираж" />
                </SelectTrigger>
                <SelectContent>
                  {printRuns.map((run) => (
                    <SelectItem key={run} value={run}>
                      {run} шт
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Номер телефона</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+996 XXX XXX XXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-base"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? (
                <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
              ) : (
                <Icon name="Send" className="mr-2" size={20} />
              )}
              Отправить заявку
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderFormDialog;

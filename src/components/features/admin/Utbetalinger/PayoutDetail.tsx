"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/UI/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/card";
import { Badge } from "@/components/UI/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { SellerPayout } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import { markPayoutAsPaid, sendReceipt } from "@/serverActions/ServerActions";

const PayoutDetail = ({ sellerPayout }: { sellerPayout: SellerPayout }) => {
  const router = useRouter();
  const [payout, setPayout] = useState<SellerPayout>();

  const { mutate, isPending } = useMutation({
    mutationFn: sendReceipt,
    onSuccess: () => {
      // setSelectedProducts([]);
    },
    onError: (error) => {
      const message = JSON.parse(error.message);
      // toast.error(message[0].message);
    },
  });
  const { mutate: markPayoutMutation } = useMutation({
    mutationFn: markPayoutAsPaid,
    onSuccess: () => {
      // setSelectedProducts([]);
    },
    onError: (error) => {
      const message = JSON.parse(error.message);
      // toast.error(message[0].message);
    },
  });
  const todaysDate = new Date();
  const isToday =
    todaysDate.toISOString().split("T")[0] ===
    new Date().toISOString().split("T")[0];
  const markAsPaid = async () => {
    // TODO: Implementere funksjonalitet for å markere som betalt
    const updatedPayout = { ...payout, payoutDate: new Date().toISOString() };
    // setPayout(updatedPayout);
    // Du ville vanligvis gjort et API-kall her for å oppdatere utbetalingen
  };

  return (
    <div className="container mx-auto py-10">
      <Button
        variant="outline"
        onClick={() => router.push("/payouts")}
        className="mb-6"
      >
        ← Tilbake til utbetalinger
      </Button>
      <h1 className="mb-6 text-3xl font-bold text-purple-700">
        Detaljer om selgerutbetaling
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Selgerinformasjon</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Navn:</strong>{" "}
              {sellerPayout.attributes.seller.data?.attributes.username}
            </p>
            <p>
              <strong>E-post:</strong>{" "}
              {
                sellerPayout.attributes.seller.data.attributes.user?.data
                  .attributes.email
              }
            </p>
            <p>
              <strong>Salgsmetode:</strong>{" "}
              {sellerPayout.attributes.sales_method.data?.attributes.name}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Utbetalingsoppsummering</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Totalpris:</strong> kr
              {sellerPayout.attributes.totalPrice.toFixed(2)}
            </p>
            <p>
              <strong>Utbetalingsbeløp:</strong> kr
              {sellerPayout.attributes.payoutPrice.toFixed(2)}
            </p>
            <p>
              <strong>Minihjørne-pris:</strong> kr
              {sellerPayout.attributes.minihjornePrice.toFixed(2)}
            </p>
            <p>
              <strong>Utbetalingsdato:</strong>{" "}
              {sellerPayout.attributes.payoutDate
                ? new Date(
                    sellerPayout.attributes.payoutDate,
                  ).toLocaleDateString()
                : "Venter"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Produkter</CardTitle>
        </CardHeader>
        <CardContent>
          <Table height="h-auto">
            <TableHeader>
              <TableRow>
                <TableHead>Navn</TableHead>
                <TableHead className="text-right">Pris</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sellerPayout.attributes.products?.data?.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.attributes.brand}</TableCell>
                  <TableCell className="text-right">
                    kr {product.attributes.price.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-6 flex gap-4">
        <Button
          onClick={() => {
            mutate({ id: sellerPayout.id });
          }}
          className="bg-purple-600 text-white hover:bg-purple-700"
        >
          Send kvittering
        </Button>
        <Button
          onClick={() => markPayoutMutation({ id: sellerPayout.id })}
          disabled={!!sellerPayout.attributes.payoutDate}
          className="bg-green-600 text-white hover:bg-green-700"
        >
          Marker som betalt
        </Button>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Tidslinje for utbetaling</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Opprettet</span>
              <Badge variant="outline">
                {new Date(sellerPayout.attributes.createdAt).toLocaleString()}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Sist oppdatert</span>
              <Badge variant="outline">
                {new Date(sellerPayout.attributes.updatedAt).toLocaleString()}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Status for utbetaling</span>
              <Badge
                className={
                  sellerPayout.attributes.payoutDate
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }
              >
                {sellerPayout.attributes.payoutDate ? "Betalt" : "Venter"}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default PayoutDetail;

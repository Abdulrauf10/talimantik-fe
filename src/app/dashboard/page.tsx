'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Dasboard = () => {
  return (
    <>
      <section className="bg-[url('/hero-dashboard.png')] bg-cover bg-center bg-no-repeat w-full h-[35vh] md:h-[55vh] rounded-bl-3xl rounded-br-3xl"></section>

      <section className="mt-4 p-8 flex justify-end gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-[100px] shadow-sm p-2 rounded-md">
            Level
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Pilih level soal</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Mudah</DropdownMenuItem>
            <DropdownMenuItem>Sedang</DropdownMenuItem>
            <DropdownMenuItem>Sulit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="w-[100px] shadow-sm p-2 rounded-md">
            Umur
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Pilih umur</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>6-12 tahun</DropdownMenuItem>
            <DropdownMenuItem>13-18 tahun</DropdownMenuItem>
            <DropdownMenuItem>18+ tahun</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </>
  );
};

export default Dasboard;

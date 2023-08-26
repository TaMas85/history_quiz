from tkinter import *

ablak = Tk()
ablak.title("RIASZTÓ")

chbone = IntVar()
eloszob = Checkbutton(ablak, text="Előszoba", variable=chbone)
chbtwo = IntVar()
fsz_foly = Checkbutton(ablak, text="Fsz. folyosó", variable=chbtwo)
chbthree = IntVar()
konyha = Checkbutton(ablak, text="Konyha", variable=chbthree)

rb = StringVar()
sz_be = Radiobutton(ablak, value="be", text="Sziréna BE", variable=rb)
sz_ki = Radiobutton(ablak, value="ki", text="Sziréna KI", variable=rb)
sz_ki.invoke()

exit_button = Button(ablak, text="Exit", width=2, height=2, command=ablak.destroy)

kod = Entry(ablak)


def beir0():
    szam = "0"
    kod.insert(END, szam)


def beir1():
    szam = "1"
    kod.insert(END, szam)


def beir2():
    szam = "2"
    kod.insert(END, szam)


def beir3():
    szam = "3"
    kod.insert(END, szam)


def beir4():
    szam = "4"
    kod.insert(END, szam)


def beir5():
    szam = "5"
    kod.insert(END, szam)


def beir6():
    szam = "6"
    kod.insert(END, szam)


def beir7():
    szam = "7"
    kod.insert(END, szam)


def beir8():
    szam = "8"
    kod.insert(END, szam)


def beir9():
    szam = "9"
    kod.insert(END, szam)


def torles():
    kod.delete(0, END)


nulla = Button(ablak, text="0", width=2, height=2, command=beir0)
egy = Button(ablak, text="1", width=2, height=2, command=beir1)
ketto = Button(ablak, text="2", width=2, height=2, command=beir2)
harom = Button(ablak, text="3", width=2, height=2, command=beir3)
negy = Button(ablak, text="4", width=2, height=2, command=beir4)
ot = Button(ablak, text="5", width=2, height=2, command=beir5)
hat = Button(ablak, text="6", width=2, height=2, command=beir6)
het = Button(ablak, text="7", width=2, height=2, command=beir7)
nyolc = Button(ablak, text="8", width=2, height=2, command=beir8)
kilenc = Button(ablak, text="9", width=2, height=2, command=beir9)
torol = Button(ablak, text="Törlés", width=2, height=2, command=torles)


def indit():
    eszob = chbone.get()
    folyf = chbtwo.get()
    kony = chbthree.get()
    szirena = rb.get()
    jo = kod.get()
    if jo == "1863":

        if szirena == "be":
            kilenc.configure(foreground="yellow")
        else:
            kilenc.configure(foreground="black")

        if eszob == 1:
            nulla.configure(foreground="red")
        else:
            nulla.configure(foreground="black")

        if folyf == 1:
            egy.configure(foreground="red")
        else:
            egy.configure(foreground="black")

        if kony == 1:
            ketto.configure(foreground="red")
        else:
            ketto.configure(foreground="black")

        ablak.title("RIASZTÓ --> ÉLES")
        sz_ki.configure(state=DISABLED)
        sz_be.configure(state=DISABLED)
        eloszob.configure(state=DISABLED)
        fsz_foly.configure(state=DISABLED)
        konyha.configure(state=DISABLED)
        exit_button.configure(state=DISABLED)

    kod.delete(0, END)


def stop():
    eszob = chbone.get()
    folyf = chbtwo.get()
    kony = chbthree.get()
    jo = kod.get()
    szirena = rb.get()
    if jo == "1863":

        if eszob == 1:
            nulla.configure(foreground="black")

        if folyf == 1:
            egy.configure(foreground="black")

        if kony == 1:
            ketto.configure(foreground="black")

        if szirena == "be":
            kilenc.configure(foreground="black")

        ablak.title("RIASZTÓ --> KIKAPCSOLT")
        sz_ki.configure(state=NORMAL)
        sz_be.configure(state=NORMAL)
        eloszob.configure(state=NORMAL)
        fsz_foly.configure(state=NORMAL)
        konyha.configure(state=NORMAL)
        exit_button.configure(state=NORMAL)
    kod.delete(0, END)


ind = Button(ablak, text="START", width=10, height=10, foreground="green", command=indit)
stop = Button(ablak, text="STOP", width=10, height=10, foreground="red", command=stop)

eloszob.grid(row=1, column=1)
fsz_foly.grid(row=2, column=1)
konyha.grid(row=3, column=1)
sz_be.grid(row=1, column=2)
sz_ki.grid(row=2, column=2)
ind.grid(row=1, rowspan=3, column=8)
stop.grid(row=8, rowspan=3, column=8)
kod.grid(row=2, column=4, columnspan=3)
nulla.grid(row=8, column=3)
egy.grid(row=8, column=4)
ketto.grid(row=8, column=5)
harom.grid(row=8, column=6)
negy.grid(row=8, column=7)
ot.grid(row=9, column=3)
hat.grid(row=9, column=4)
het.grid(row=9, column=5)
nyolc.grid(row=9, column=6)
kilenc.grid(row=9, column=7)
torol.grid(row=9, column=2)
exit_button.grid(row=1, column=6)

ablak.mainloop()
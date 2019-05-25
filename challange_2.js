 var john1,john2,john3,mike1,mike2,mike3,mike_avg,john_avg,mary1,mary2,mary3,mary_avg;
 john1 = 97;
 john2 = 134;
 john3 = 105;
 mike1 = 97;
 mike2 = 134;
 mike3 = 105;
 mary1 = 97;
 mary2 = 134;
 mary3 = 105;

 john_avg = (john1+john2+john3)/3;
 mike_avg = (mike1+mike2+mike3)/3;
 mary_avg = (mary1+mary2+mary3)/3;

 switch(true)
 {
     case john_avg > mike_avg && john_avg > mary_avg:
        document.write("john's team is the winner and the average is: "+john_avg);
        break;

    case mary_avg > mike_avg && mary_avg > john_avg:
        document.write("mary's team is the winner and the average is: "+john_avg);
        break;

    case mike_avg > mary_avg && mike_avg > john_avg:
        document.write("mike's team is the winner and the average is: "+mike_avg);
        break;
    
    default:
    document.write("There is a draw");

 }